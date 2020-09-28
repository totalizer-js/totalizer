import engine from './engine';
// import debug from './debug';

// const between = (val, min, max) => Math.min(Math.max(val, min), max);

import A from './A';

class Draw {
  constructor(path, opts = {}) {
    if (typeof a === 'string') {
      this.path = document.querySelector(path);
    } else {
      this.path = path;
    }
    /**
     * 配置
     */
    this.duration = opts.dur !== undefined ? opts.dur : 300;
    this.loop = !!opts.loop;
    this.autoplay = !!opts.autoplay;

    /**
     * 变化数值
     */
    this.totalLen = this.path.getTotalLength();
    this.from = this.totalLen;
    this.to = 0;

    this.A = new A(this.totalLen, 0, this.duration);

    this.reset();
    if (this.autoplay) this.play();
  }

  tick(t) {
    if (!this.startTime) this.startTime = t;

    this.currentTime = t - this.startTime + this.lastTime;

    if (this.currentTime < this.duration) {
      this.render();
    } else if (this.loop) {
      this.currentTime = 0;
      this.startTime = t;
      this.lastTime = 0;

      this.render();
    } else this.complete();
  }

  render() {
    this.cur = this.A.getCurrentValue(this.currentTime);
    this.path.setAttribute('stroke-dashoffset', this.cur);
  }

  /**
   * 重制到初始化状态
   */
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

    /**
     * 初始化
     */
    this.path.setAttribute('stroke-dasharray', this.totalLen);

    this.render();
  }

  /**
   * 重制成完成状态
   */
  complete() {
    this.completed = true;
    this.currentTime = this.duration;
    this.pause();
    this.render();
  }

  /**
   * 暂停
   */
  pause() {
    this.paused = true;
    this.lastTime = this.currentTime;
    engine.remove(this);
  }

  /**
   * 开始播放动画
   */
  play() {
    if (!this.paused) return;
    if (this.completed) this.reset();
    this.paused = false;
    this.startTime = 0;
    engine.add(this);
  }
}

export default Draw;
