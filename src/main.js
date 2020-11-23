/* eslint-disable no-underscore-dangle */
import engine from './engine';
import eases from './eases';

import { tweensDecompose, tweensRender } from './tweens';

const STATUS = {
  READY: 0,
  DELAY: 1,
  PLAYING: 2,
  PAUSE: 3,
  FINISH: 4,
};
function getParentSvgEl(el) {
  let parentEl = el.parentNode;
  while (parentEl instanceof SVGElement) {
    if (!(parentEl.parentNode instanceof SVGElement)) break;
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}
function getParentSvg(pathEl, svgData) {
  const svg = svgData || {};
  const parentSvgEl = svg.el || getParentSvgEl(pathEl);
  const rect = parentSvgEl.getBoundingClientRect();
  const viewBoxAttr = parentSvgEl.getAttribute('viewBox');
  const { width } = rect;
  const { height } = rect;
  const viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3],
  };
}
function getPathProgress(path, progress) {
  function point(offset = 0) {
    const l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  console.log(path.el.getPointAtLength(0));
  const svg = getParentSvg(path.el, path.svg);
  const p = point();
  const p0 = point(-1);
  const p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    // eslint-disable-next-line no-mixed-operators
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    default:
      return null;
  }
}

class Animate {
  constructor(opts) {
    /**
     * el
     */
    this.el = opts.el;
    /**
     * props
     */
    this.props = opts.props || {};
    /**
     * tweens
     */
    if (opts.drawing) {
      const totalLen = this.el.getTotalLength();
      this.el.setAttribute('stroke-dasharray', totalLen);
      this.props = {
        strokeDashoffset: [totalLen, 0],
      };
    }
    if (opts.movingPath) {
      console.log(getPathProgress({ el: opts.movingPath }, 0));
      this.props = {};
    }
    this.tweens = tweensDecompose(this.el, this.props || {});

    /**
     * opts
     */
    this.loop = !!opts.loop;
    this.alternate = opts.alternate || false;
    this.duration = opts.duration || 300;
    this.easing = (eases[opts.easing] || eases.linear)();
    this.delay = opts.delay || 0;

    /**
     * status
     */
    this.status = STATUS.READY;
    this.reverse = false;
    this._cur = 0; // 动画运行时间
    this.now = 0; // 运行时间
    this.start = 0; // 开始时间
    this.last = 0; // 上次运行时间
  }

  get cur() {
    return this._cur;
  }

  set cur(value) {
    if (value !== this._cur) {
      this._cur = value;
      this.render();
    }
  }

  render() {
    const cur = this.reverse ? (this.duration - this.cur) : this.cur;
    const ratio = this.easing(cur / this.duration);
    tweensRender(this.el, this.tweens, ratio);
  }

  tick(t) {
    if (!this.start) {
      this.start = t;
    }
    this.now = t - this.start + this.last;

    if (this.now <= this.delay) {
      this.cur = 0;
      this.status = STATUS.PLAYING;
    } else if (this.now <= this.duration + this.delay) {
      this.cur = this.now - this.delay;
      this.status = STATUS.PLAYING;
    } else if (this.loop) {
      this.cur = this.duration;
      this.start = 0;
      this.last = 0;
      if (this.alternate) this.reverse = !this.reverse;
    } else {
      this.finish();
    }
  }

  reset() {
    if ([STATUS.READY].includes(this.status)) return;
    this.cur = 0;
    this.start = 0;
    this.last = 0;
    this.status = STATUS.READY;
    engine.remove(this);
  }

  play() {
    if ([STATUS.DELAY, STATUS.PLAYING].includes(this.status)) return;
    if (this.status === STATUS.FINISH) this.reset();
    engine.add(this);
  }

  pause() {
    if ([STATUS.READY, STATUS.FINISH, STATUS.PAUSE].includes(this.status)) return;
    this.last = this.now;
    this.start = 0;

    this.status = STATUS.PAUSE;
    engine.remove(this);
  }

  finish() {
    this.cur = this.duration;
    this.last = 0;
    this.start = 0;

    this.status = STATUS.FINISH;
    engine.remove(this);
  }

  process(ratio) {
    const val = Math.max(Math.min(ratio, 1), 0);
    this.cur = val * this.duration;
  }
}

export default Animate;
