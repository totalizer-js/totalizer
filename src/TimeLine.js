/* eslint-disable no-underscore-dangle */
import engine from './engine';
import eases from './eases';
import getElementTransform from './transform';
import tweenFactory from './tweens';

const isHighPriority = (old, current) => {
  if (current[0] > 0 || current[0] > old[0]) return true;

  if (current[1] >= old[1]) return true;
  return false;
};

class TimeLine {
  constructor(options) {
    this.tweens = [];
    this.renders = new Map();
    /**
     * time
     */
    this.now = 0;
    this.start = 0;
    this.last = 0;
    this._cur = 0;
    this.dur = 0;

    /**
     * status
     */

    this.loopTimes = 0;
    this.isReverse = false;
    this.isAlternate = false;

    if (options) this.add(options);
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
    this.tweens.forEach((tween) => {
      this._setRender(tween);
    });
    this._runRender();
  }

  _setRender(tween) {
    let process;
    const cur = this.isReverse ? (this.dur - this.cur) : this.cur;
    let level;
    if (cur < tween.delay) {
      process = 0;
      level = [-1, cur - tween.delay];
    } else if (cur <= tween.delay + tween.duration) {
      process = (cur - tween.delay) / tween.duration;
      level = [1, 0];
    } else {
      process = 1;
      level = [0, tween.delay + tween.duration - cur];
    }

    const ratio = eases[tween.easing]()(process);

    let result = '';
    if (tween.fn) {
      result = tween.fn(process);
    } else {
      [result] = tween.str;
      for (let i = 0; i < tween.to.length; i += 1) {
        const from = tween.from[i];
        const to = tween.to[i];
        const now = from + (to - from) * ratio;
        result += now + tween.str[i + 1];
      }
    }

    let renderCash = this.renders.get(tween.el);
    if (renderCash) {
      const renderItem = renderCash.get(tween.prop);
      if (renderItem) {
        if (isHighPriority(renderItem.level, level)) {
          renderCash.set(tween.prop, {
            el: tween.el,
            type: tween.type,
            prop: tween.prop,
            result,
            level,
          });
        }
      } else {
        renderCash.set(tween.prop, {
          el: tween.el,
          type: tween.type,
          prop: tween.prop,
          result,
          level,
        });
      }
    } else {
      renderCash = new Map();
      renderCash.set(tween.prop, {
        el: tween.el,
        type: tween.type,
        prop: tween.prop,
        result,
        level,
      });
      this.renders.set(tween.el, renderCash);
    }
  }

  _runRender() {
    this.renders.forEach((render, el) => {
      render.forEach((tween) => {
        const { style } = el;
        if (tween.type === 'transform') {
          const transform = getElementTransform(tween.el);
          transform.set(tween.prop, tween.result);
          let str = '';
          transform.forEach((value, prop) => { str += `${prop}(${value}) `; });
          style.transform = str;
        } else if (tween.type === 'attribute') {
          tween.el.setAttribute(tween.prop, tween.result);
        } else {
          style[tween.prop] = tween.result;
        }
      });
    });
    this.renders = new Map();
  }

  tick(t) {
    if (!this.start) {
      this.start = t;
    }
    this.now = t - this.start + this.last;
    if (this.now <= this.dur) {
      this.cur = this.now;
    } else {
      this.loopTimes -= 1;
      if (this.loopTimes > 0) {
        this.cur = this.dur;
        this.start = 0;
        this.last = 0;
        if (this.isAlternate) this.isReverse = !this.isReverse;
      } else {
        this.finish();
      }
    }
  }

  play() {
    engine.add(this);
    return this;
  }

  loop(val = Infinity) {
    this.loopTimes = val || 0;
    return this;
  }

  reverse(value) {
    if (value !== undefined) this.isReverse = Boolean(value);
    else this.isReverse = !this.isReverse;
    return this;
  }

  alternate(value) {
    if (value !== undefined) this.isAlternate = Boolean(value);
    else this.isAlternate = !this.isAlternate;
    return this;
  }

  pause() {
    this.last = this.now;
    this.start = 0;
    engine.remove(this);
    return this;
  }

  process(val) {
    this.cur = this.dur * Math.max(0, Math.min(val, 1));
    return this;
  }

  reset() {
    this.start = 0;
    this.last = 0;
    this.cur = 0;

    engine.remove(this);
    return this;
  }

  finish() {
    this.last = 0;
    this.start = 0;
    this.cur = this.dur;

    engine.remove(this);
    return this;
  }

  add(options = {}) {
    const opts = {
      duration: 300,
      props: {},
      delay: 0,
      endDelay: 0,
      easing: 'linear',
      ...options,
    };

    this.dur = Math.max(opts.duration + opts.delay + opts.endDelay, this.dur);

    const newTweens = tweenFactory(opts);
    this.tweens.push(...newTweens);
    return this;
  }

  clear() {
    this.tweens = [];
  }
}

export default TimeLine;
