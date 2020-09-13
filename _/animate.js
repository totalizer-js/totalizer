import engine from './engine';

class Animate {
  constructor(node) {
    this.node = node;

    this.startTime = 0;
    this.lastTime = 0;

    this.duration = 3000;

    engine.add(this);
  }

  tick(t) {
    if (!this.startTime) this.startTime = t;

    const now = t + (this.lastTime - this.startTime);

    if (now < this.duration) {
      this.node.innerHTML = `${now}`;
    }
  }

  setAttribute(name, value) {
    this.node.setAttribute(name, value);
  }

  // play() {}

//   stop() {}
}

export default Animate;
