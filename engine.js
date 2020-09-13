import debug from './debug';

class Engine {
  constructor() {
    this.raf = '';
    this.instances = [];
  }

  play() {
    this.raf = requestAnimationFrame(this.tick.bind(this));
  }

  stop() {
    this.raf = cancelAnimationFrame(this.raf);
    debug('raf', this.raf);
    debug('instances', this.instances.length);
  }

  tick(t) {
    this.instances.forEach((ins) => ins.tick(t));
    if (this.instances.length) this.play();
    debug('raf', this.raf);
    debug('instances', this.instances.length);
  }

  add(Animate) {
    this.instances.push(Animate);
    if (this.instances.length === 1) this.play();
  }

  remove(Animate) {
    const i = this.instances.indexOf(Animate);
    if (i > -1 && i < this.instances.length) {
      this.instances.splice(i, 1);
      if (!this.instances.length) this.stop();
    }
  }
}

export default new Engine();
