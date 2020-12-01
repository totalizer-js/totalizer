<template>
  <div class="page">
    <h1>Props 测试</h1>

    <section>
      <h2>ATTRIBUTE 【数值】<span>{ cx: 320, cy: 100, r: 20}</span></h2>
      <svg viewBox="0 0 400 200">
        <circle cx="50" cy="100" r="2" fill="#000" ref="test01_circle" />
      </svg>
    </section>
    <section>
      <h2>
        CSS 【数值】+【单位】
        <span>{ left: '250px', borderRadius: '50%' }</span>
      </h2>
      <div style="position: relative">
        <svg viewBox="0 0 400 200"></svg>
        <div
          ref="test02_div"
          style="
            position: absolute;
            left: 50px;
            bottom: 50px;
            width: 100px;
            height: 100px;
            background: #000;
            border-radius: 5%;
          "
        ></div>
      </div>
    </section>
    <section>
      <h2>ATTRIBUTE & CSS 【颜色】<span>{ fill: '#08c' }</span></h2>
      <svg viewBox="0 0 400 200">
        <circle cx="120" cy="100" r="50" fill="#fff" ref="test03_circle" />
      </svg>
      <div
        ref="test03_div"
        style="
          position: absolute;
          right: 70px;
          bottom: 50px;
          width: 100px;
          height: 100px;
          background: #000;
          border-radius: 5%;
        "
      ></div>
    </section>

    <section>
      <h2>TRANSFORM</h2>
      <svg viewBox="0 0 400 200">
        <rect width="20" height="10" rx="2" ref="transform_rect"/>
      </svg>
      <p>Todo: 支持 transform</p>
    </section>

    <h1>动画参数</h1>

    <section>
      <h2>循环<span>loop</span></h2>
      <svg viewBox="0 0 400 200">
        <text x="30" y="48" font-size="12">循环 loop: true</text>
        <rect x="150" y="40" width="20" height="10" rx="2" ref="loop_rect_1" />
        <text x="30" y="98" font-size="12">往返 alternate: true</text>
        <rect x="150" y="90" width="20" height="10" rx="2" ref="loop_rect_2" />
        <text x="30" y="148" font-size="12">不循环</text>
        <rect x="150" y="140" width="20" height="10" rx="2" ref="loop_rect_3" />
      </svg>
    </section>
    <section>
      <h2>缓动<span>easing</span></h2>
      <svg viewBox="0 0 400 200" ref="eases"></svg>
      <p>Todo: 支持贝塞尔曲线函数和自定义缓动函数</p>
    </section>
    <section>
      <h2>延时<span>delay</span></h2>
      <svg viewBox="0 0 400 200"></svg>
      <p>Todo: 支持 endDelay</p>
    </section>

    <h1>SVG 动画</h1>

    <section>
      <h2>Path Drawing</h2>
      <svg viewBox="0 0 400 200">
        <path
          ref="path"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"
          style="transform: translate(35%, 25%)"
        ></path>
      </svg>
    </section>
    <section>
      <h2>Path Moving</h2>
      <svg viewBox="0 0 400 200">
        <path
          ref="moving_path"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"
        ></path>
        <circle cx="20" cy="10" r="5" fill="#08c" ref="moving_circle" />
      </svg>
    </section>
    <section>
      <h2>Path Changing</h2>
      <svg viewBox="0 0 400 200">
        <path
          ref="changing_path"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          d="M70 24 L119.574 60.369 L100.145 117.631 L50.855 101.631 L3.426 54.369z"
          style="transform: translate(30%, 20%)"
        />
      </svg>
    </section>

    <h1>方法</h1>

    <section>
      <h2>play reset pause finish process</h2>
      <div style="position:relative;">
      <svg viewBox="0 0 400 200">
        <svg viewBox="0 0 400 200">
          <circle cx="50" cy="100" r="2" fill="#000" ref="controll_circle" />
        </svg>
      </svg>
      <div class="func">
        <b class="btn" @click="play">播放</b>
        <b class="btn" @click="pause">暂停</b>
        <b class="btn" @click="reset">重置</b>
        <b class="btn" @click="finish">完成</b>

        <input
          type="range"
          @change="inputChange"
          min="0"
          max="100"
          v-model="value"
          style="position:relative;top:5px;margin-left: 10px;"
        />
      </div>
      </div>
      <p>Todo: 增加 reverse 方法，规划循环和方向逻辑。</p>
    </section>

    <h1>后续计划</h1>

    <section>
      <h2 style="border: none">**</h2>
      <p>支持增量数值变化 eg. '+50px'</p>
      <p>支持步长动画 step</p>
      <p>支持关键帧动画 keyFrames</p>
      <p>支持动画生命周期，和事件回掉</p>
      <p>支持Promise</p>
      <p>
        支持连续的动画，并设计一个精确的时间引擎（engine），避免连续动画的时间误差
      </p>
      <p>设计一个交错动画系统，处理复杂的动画和重叠动画</p>
      <p>性能，内存，动画对象销毁</p>
    </section>
  </div>
</template>
<script>
// import Animate from '../src/main';
import TimeLine from '../src/TimeLine';

export default {
  data() {
    return {
      ani: '',
      value: 0,
    };
  },
  mounted() {
    /**
     * props 测试
     */
    this.test01();
    this.test02();
    this.test03();
    this.test04();
    /**
     * 动画测试
     */
    this.loopDemo();
    this.easesDemo();
    /**
     * svg 测试
     */
    this.drawingDemo();
    this.movingDemo();
    this.changingDemo();
    /**
     * 方法 测试
     */
    this.controllDemo();
  },
  methods: {
    test01() {
      const ani = new TimeLine({
        el: this.$refs.test01_circle,
        props: {
          cx: 320,
          cy: 100,
          r: 20,
        },
        duration: 2000,
      });
      ani.loop().alternate().play();
    },
    test02() {
      const ani = new TimeLine({
        el: this.$refs.test02_div,
        props: {
          left: '250px',
          borderRadius: '50%',
        },
        duration: 2000,
      });
      ani.loop().alternate().play();
    },
    test03() {
      const ani = new TimeLine({
        el: this.$refs.test03_circle,
        props: {
          fill: '#08c',
        },
        duration: 2000,
      });
      ani.add({
        el: this.$refs.test03_div,
        props: {
          background: '#f60',
        },
        duration: 2000,
      });
      ani.loop().alternate().play();
    },
    test04() {
      const ani = new TimeLine({
        el: this.$refs.transform_rect,
        props: {
          translateX: ['50px', '200px'],
          translateY: ['50px', '100px'],
          scaleX: 2,
          scaleY: 2,
          rotateZ: '80deg',
        },
        duration: 2000,
      });
      ani.loop().alternate().play();
    },

    loopDemo() {
      const loop = new TimeLine({
        el: this.$refs.loop_rect_1,
        props: {
          x: '320',
        },
        duration: 1000,
        delay: 300,
        endDelay: 300,
      });
      loop.loop().play();
      const alternate = new TimeLine({
        el: this.$refs.loop_rect_2,
        props: {
          x: '320',
        },
        duration: 1000,
        delay: 300,
        endDelay: 300,
      });
      alternate.loop().alternate().play();
      const noloop = new TimeLine({
        el: this.$refs.loop_rect_3,
        props: {
          x: '320',
        },
        duration: 1000,
        delay: 300,
      });
      noloop.play();
    },
    easesDemo() {
      [
        'linear',
        'easeOutSine',
        'easeOutQuad',
        'easeOutCubic',
        'easeOutQuart',
        'easeOutQuint',
        'easeOutExpo',
        'easeOutCirc',
        'easeOutBounce',
        'easeOutBack',
        'easeOutElastic',
      ].forEach((ease, i) => {
        const rect = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'rect',
        );
        rect.setAttribute('x', 120);
        rect.setAttribute('y', i * 16 + 15);
        rect.setAttribute('width', 20);
        rect.setAttribute('height', 10);
        rect.setAttribute('rx', 2);
        const text = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'text',
        );
        text.setAttribute('x', 10);
        text.setAttribute('y', i * 16 + 24);
        text.innerHTML = ease;
        text.setAttribute('style', 'font-size:12px;line-height:20px;');

        const ani = new TimeLine({
          el: rect,
          props: {
            x: '320',
          },
          duration: 2000,
          easing: ease,
        });
        ani.loop().alternate().play();
        this.$refs.eases.appendChild(text);
        this.$refs.eases.appendChild(rect);
      });
    },
    drawingDemo() {
      const el = this.$refs.path;
      const totalLen = el.getTotalLength();
      el.setAttribute('stroke-dasharray', totalLen);
      const ani = new TimeLine({
        el,
        props: {
          strokeDashoffset: [totalLen, 0],
        },
        delay: 300,
        duration: 2000,
      });
      ani.loop().alternate().play();
    },
    movingDemo() {
      const el = this.$refs.moving_circle;

      const path = this.$refs.moving_path;
      const totalLen = path.getTotalLength();

      const ani = new TimeLine({
        el,
        props: {
          cx: (process) => path.getPointAtLength(totalLen * process).x,
          cy: (process) => path.getPointAtLength(totalLen * process).y,
        },
        delay: 0,
        duration: 5000,
        loop: true,
      });
      ani.loop().alternate().play();
    },
    changingDemo() {
      const ani = new TimeLine({
        el: this.$refs.changing_path,
        props: {
          d:
            'M70 6 L136.574 54.369 L89.145 100.631 L39.855 117.631 L20.426 60.369z',
        },
        delay: 300,
        duration: 1000,
      });
      ani.loop().alternate().play();
    },
    controllDemo() {
      this.ani = new TimeLine({
        el: this.$refs.controll_circle,
        props: {
          cx: 320,
          cy: 100,
          r: 20,
        },
        endDelay: 1000,
        duration: 2000,
      });
    },
    play() {
      this.ani.play();
    },
    pause() {
      this.ani.pause();
    },
    reset() {
      this.ani.reset();
    },
    finish() {
      this.ani.finish();
    },
    inputChange() {
      this.ani.process(this.value / 100);
    },
  },
};
</script>

<style>
body {
  padding: 20px;
  background: #f1f1f1;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.page {
  padding-left: 5px;
  width: 830px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  /* background: #08c; */
}
.page:after {
  display: table;
  clear: both;
  content: "";
}
section {
  position: relative;
  margin: 5px;
  width: 400px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
h1 {
  padding: 20px;
  flex-shrink: 1;
  width: 100%;
  clear: both;
  font-size: 18px;
  line-height: 20px;
  font-weight: normal;
}
h2 {
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  border-bottom: 1px dashed #ddd;
}
h2 span {
  font-size: 12px;
  float: right;
  color: #999;
}
p {
  padding: 10px;
  color: #333;
  font-size: 12px;
  line-height: 18px;
  color: #999;
  border-top: 1px dashed #ddd;
}
.func {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.func b {
  display: block;
  float: left;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 18px;
  background: #ddd;
  cursor: pointer;
  border-right: 1px solid #fff;
}
svg {
  display: block;
  background: #fff;
}

</style>
