/* eslint-disable no-underscore-dangle */
import engine from './engine';
import eases from './eases';

import tweens from './tweens';

const STATUS = {
  READY: 0,
  DELAY: 1,
  PLAYING: 2,
  PAUSE: 3,
  END_DELAY: 4,
  FINISH: 5,
};

class Animate {
  constructor(target, props, opts) {
    /**
     * target
     */
    this.target = target;

    /**
     * tweens
     */
    this.tweens = tweens(target, props);
    console.log(JSON.stringify(this.tweens[0]));
    /**
     * opts
     * to do: 合法判定
     */
    // const default = {
    //   loop: false,
    //   alternate: false,
    //   duration: 300,
    //   easing: 'linear',
    //   delay:0,
    //   endDelay:0
    // }
    this.loop = !!opts.loop;
    this.alternate = opts.alternate || false;
    this.duration = opts.duration || 300;
    this.easing = opts.easing || 'linear';
    this.delay = opts.delay || 0;
    this.endDelay = opts.endDelay || 0;

    /**
     * status
     */
    this.status = STATUS.READY;
    this.reverse = false;
    this._cur = 0;
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
    const ratio = eases[this.easing]()(cur / this.duration);

    this.tweens.forEach((tween) => {
      const value = tween.from + (tween.to - tween.from) * ratio;
      this.target.setAttribute(tween.prop, value);
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
    } else if (this.now <= this.duration + this.delay + this.endDelay) {
      this.cur = this.duration;
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
    if ([STATUS.DELAY, STATUS.PLAYING, STATUS.END_DELAY].includes(this.status)) return;
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
}

export default Animate;
