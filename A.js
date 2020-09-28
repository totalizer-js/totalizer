class A {
  constructor(from = 0, to = 0, dur = 0, easing = '') {
    this.from = from;
    this.to = to;
    this.dur = dur;

    if (typeof easing === 'function') {
      this.easing = easing;
    } else {
      this.easing = (a) => a;
    }
  }

  getCurrentValue(cur) {
    const progress = cur / this.dur;
    const eased = this.easing(progress);
    return this.from + (eased * (this.to - this.from));
  }
}

export default A;
