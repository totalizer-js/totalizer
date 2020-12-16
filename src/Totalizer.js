/* eslint-disable no-underscore-dangle */
import engine from './utils/engine';
import getElementTransform from './utils/getElementTransform';
import { getLevel, compareLevel } from './utils/level';
import createTweens from './utils/createTweens';

class Totalizer {
  constructor(options) {
    /**
     * tweens & renderMap
     */
    this.tweens = [];
    this.renderMap = new Map();
    /**
     * time
     */
    this._now = 0;
    this._start = 0;
    this._last = 0;
    this._cur = 0;

    /**
     * total time
     */
    this.totalTime = 0;

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
      this._setRenderMap(tween);
    });
    this._runRenderMap();
  }

  _setRenderMap(tween) {
    const cur = this.isReverse ? (this.totalTime - this.cur) : this.cur;
    const level = getLevel(tween, cur);

    let process;
    if (cur < tween.delay) {
      process = 0;
    } else if (cur <= tween.delay + tween.duration) {
      process = (cur - tween.delay) / tween.duration;
    } else {
      process = 1;
    }

    const ratio = tween.easing(process);

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

    let renderCash = this.renderMap.get(tween.el);
    if (!renderCash) renderCash = new Map();

    const renderItem = renderCash.get(tween.prop);
    if (!renderItem || compareLevel(level, renderItem.level)) {
      renderCash.set(tween.prop, {
        el: tween.el,
        type: tween.type,
        prop: tween.prop,
        result,
        level,
      });
    }

    this.renderMap.set(tween.el, renderCash);
  }

  _runRenderMap() {
    this.renderMap.forEach((render, el) => {
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
    this.renderMap = new Map();
  }

  tick(t) {
    if (!this._start) {
      this._start = t;
    }
    this._now = t - this._start + this._last;
    if (this._now <= this.totalTime) {
      this.cur = this._now;
    } else {
      this.loopTimes -= 1;
      if (this.loopTimes > 0) {
        this.cur = this.totalTime;
        this._start = 0;
        this._last = 0;
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
    this._last = this._now;
    this._start = 0;
    engine.remove(this);
    return this;
  }

  process(val) {
    this.cur = this.totalTime * Math.max(0, Math.min(val, 1));
    return this;
  }

  reset() {
    this._start = 0;
    this._last = 0;
    this.cur = 0;

    engine.remove(this);
    return this;
  }

  finish() {
    this._last = 0;
    this._start = 0;
    this.cur = this.totalTime;

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

    this.totalTime = Math.max(opts.duration + opts.delay + opts.endDelay, this.totalTime);

    this.tweens.push(...createTweens(opts));
    return this;
  }

  clear() {
    this.tweens = [];
  }
}

export default Totalizer;
