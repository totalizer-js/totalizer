import engine from './engine';
import eases from './eases';

const STATUS = {
  READY: 0,
  PLAYING: 1,
  PAUSE: 2,
  FINISH: 3,
};

class Animate {
  constructor(target, attrs, opts) {
    this.target = target;
    this.attrs = attrs;
    this.opts = opts;

    this.status = STATUS.READY;

    this.dur = this.opts.duration || 300;
    this.cur = 0;
    this.start = 0;
    this.end = 0;
  }

  tick(t) {
    if (!this.start) {
      this.cur = t;
      this.start = t;
    } else {
      this.cur = t - this.start;
    }
    if (this.cur < this.dur) {
      this.ratio = eases[this.opts.easing]()(this.cur / this.dur);

      const value = this.attrs.value * this.ratio;
      this.target.setAttribute(this.attrs.name, value);
    } else {
      this.target.setAttribute(this.attrs.name, this.attrs.value);
      this.pause();
      this.start = 0;
    }
  }

  play() {
    engine.add(this);
  }

  pause() {
    engine.remove(this);
  }
}

export default Animate;
