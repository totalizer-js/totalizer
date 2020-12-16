/**
 * render engine
 */
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
  }

  tick(t) {
    this.instances.forEach((ins) => ins.tick(t));
    if (this.instances.length) this.play();
  }

  add(AnimateInstance) {
    if (this.instances.includes(AnimateInstance)) return;
    this.instances.push(AnimateInstance);
    if (this.instances.length === 1) this.play();
  }

  remove(AnimateInstance) {
    const i = this.instances.indexOf(AnimateInstance);
    if (i > -1 && i < this.instances.length) {
      this.instances.splice(i, 1);
      if (!this.instances.length) this.stop();
    }
  }
}

export default new Engine();
