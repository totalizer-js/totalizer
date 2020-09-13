import engine from './engine';

class Drawing {
  constructor(node, opts = {}) {
    this.node = node;
    /**
     * 配置
     */
    this.duration = opts.dur !== undefined ? opts.dur : 300;

    /**
     * 变化数值
     */
    this.totalLen = this.node.getTotalLength();
    this.from = this.totalLen;
    this.to = 0;

    /**
     * 时间
     */
    this.currentTime = 0;
    this.startTime = 0;
    this.lastTime = 0;

    /**
     * 状态
     */
    this.paused = true;
    this.completed = false;

    this.cur = this.from;

    /**
     * 初始化
     */
    this.node.setAttribute('stroke-dasharray', this.totalLen);
    this.node.setAttribute('stroke-dashoffset', this.totalLen);
  }

  reset() {
    /**
     * 时间
     */
    this.currentTime = 0;
    this.startTime = 0;
    this.lastTime = 0;

    /**
     * 状态
     */
    this.paused = true;
    this.completed = false;
  }

  tick(t) {
    if (!this.startTime) this.startTime = t;

    this.currentTime = t - this.startTime + this.lastTime;

    if (this.currentTime < this.duration) {
      this.cur = this.totalLen * (1 - this.currentTime / this.duration);
      this.node.setAttribute('stroke-dashoffset', this.cur);
    } else {
      this.completed = true;
      this.currentTime = this.duration;
      this.pause();
      this.cur = 0;
      this.node.setAttribute('stroke-dashoffset', this.cur);
    }
  }

  pause() {
    this.paused = true;
    this.lastTime = this.currentTime;
    engine.remove(this);
  }

  play() {
    if (!this.paused) return;
    if (this.completed) this.reset();
    this.paused = false;
    this.startTime = 0;
    engine.add(this);
  }
}

export default Drawing;
