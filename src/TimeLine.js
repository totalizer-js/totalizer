/* eslint-disable no-underscore-dangle */
import engine from './engine';
import eases from './eases';
import getElementTransform from './transform';
import tweenFactory from './tweens';

class TimeLine {
  constructor(options) {
    this.tweens = [];
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
      let process;
      const cur = this.isReverse ? (this.dur - this.cur) : this.cur;

      if (cur <= tween.delay) process = 0;
      else if (cur <= tween.delay + tween.duration) {
        process = (cur - tween.delay) / tween.duration;
      } else process = 1;

      const ratio = eases[tween.easing]()(process);

      let result = '';
      const { style } = tween.el;
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

      if (tween.type === 'transform') {
        const transform = getElementTransform(tween.el);
        transform.set(tween.prop, result);
        let str = '';
        transform.forEach((value, prop) => { str += `${prop}(${value}) `; });
        style.transform = str;
      } else if (tween.type === 'attribute') {
        tween.el.setAttribute(tween.prop, result);
      } else {
        style[tween.prop] = result;
      }
    });
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
    if (val) {
      this.cur = this.dur * Math.max(0, Math.min(val, 1));
    }
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
    this.cur = this.duration;

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
