/* eslint-disable no-underscore-dangle */
import debug from './debug';

class Engine {
  constructor() {
    this.raf = '';
    this.instances = [];
  }

  _play() {
    this.raf = requestAnimationFrame(this._tick.bind(this));
  }

  _stop() {
    this.raf = cancelAnimationFrame(this.raf);
    debug('raf', this.raf);
    debug('instances', this.instances.length);
  }

  _tick(t) {
    this.instances.forEach((ins) => ins.tick(t));
    if (this.instances.length) this._play();
    debug('raf', this.raf);
    debug('instances', this.instances.length);
  }

  add(Animate) {
    this.instances.push(Animate);
    if (this.instances.length === 1) this._play();
  }

  remove(Animate) {
    const i = this.instances.indexOf(Animate);
    if (i > -1 && i < this.instances.length) {
      this.instances.splice(i, 1);
      if (!this.instances.length) this._stop();
    }
  }
}

export default new Engine();
