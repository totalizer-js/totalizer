/* eslint-disable no-underscore-dangle */
import engine from './engine';
import eases from './eases';
import tweens from './tweens';

const STATUS = {
  READY: 0,
  DELAY: 1,
  PLAYING: 2,
  PAUSE: 3,
  FINISH: 4,
};

function getElementTransforms(el) {
  const str = el.style.transform || '';
  const reg = /(\w+)\(([^)]*)\)/g;
  const transforms = new Map();
  // eslint-disable-next-line no-cond-assign
  let m; while (m = reg.exec(str)) transforms.set(m[1], m[2]);
  return transforms;
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
    this.transform = getElementTransforms(this.el);
    this.tweens = tweens(this.el, this.props || {}, this.transform);

    /**
     * opts
     */
    this.loop = !!opts.loop;
    this.alternate = opts.alternate || false;
    this.duration = opts.duration || 300;
    this.easing = (eases[opts.easing] || eases.linear)();
    this.delay = opts.delay || 0;

    /**
     * status 过程中产生的状态
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
    const process = cur / this.duration;
    const ratio = this.easing(cur / this.duration);

    let result = '';
    this.tweens.forEach((tween) => {
      if (tween.fn) {
        result = tween.fn(process);
      } else {
        [result] = tween.to.strings;
        for (let i = 0; i < tween.to.numbers.length; i += 1) {
          const from = tween.from.numbers[i];
          const to = tween.to.numbers[i];
          const now = from + (to - from) * ratio;
          result += now + tween.to.strings[i + 1];
        }
      }
      if (tween.type === 'transform') {
        this.transform.set(tween.prop, result);
        let str = '';
        this.transform.forEach((value, prop) => { str += `${prop}(${value}) `; });
        this.el.style.transform = str;
      } else if (tween.type === 'attribute') {
        this.el.setAttribute(tween.prop, result);
      } else {
      // eslint-disable-next-line no-param-reassign
        this.el.style[tween.prop] = result;
      }
    });
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
    this.reverse = false;
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
    this.reverse = false;
    this.cur = this.duration;
    this.last = 0;
    this.start = 0;

    this.status = STATUS.FINISH;
    engine.remove(this);
  }

  process(process) {
    const val = Math.max(Math.min(process, 1), 0);
    this.cur = val * this.duration;
  }
}

export default Animate;
