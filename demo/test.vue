<template>
  <div class="page">
    <h1>Props 测试</h1>
    <section>
      <h2>ATTRIBUTE 【数值】</h2>
      <svg viewBox="0 0 400 200">
        <circle cx="50" cy="100" r="2" fill="#000" ref="test01_circle" />
      </svg>
    </section>
    <section>
      <h2>CSS 【数值】+【单位】</h2>
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
    </section>
    <section>
      <h2>ATTRIBUTE & CSS 【颜色】</h2>
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
        <text x="100" y="100">暂不支持</text>
      </svg>
    </section>
    <h1>动画参数</h1>
    <section>
      <h2>缓动</h2>
      <svg viewBox="0 0 400 200" ref="eases"></svg>
    </section>
    <h1>SVG 动画</h1>
    <section>
      <h2>Path Drawing</h2>
      <svg viewBox="0 0 400 200" >
        <path ref="path" fill="none" stroke="currentColor" stroke-width="1" d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"></path>
      </svg>
    </section>

    <section>
      <h2>Path Moving</h2>
      <svg viewBox="0 0 400 200" >
          <circle cx="20" cy="10" r="5" fill="#08c" ref="moving_circle" />
          <path ref="moving_path" fill="none" stroke="currentColor" stroke-width="1" d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"></path>
      </svg>
    </section>

    <section>
      <h2>Path Changing</h2>
      <svg viewBox="0 0 400 200" >
      </svg>
    </section>
  </div>
</template>
<script>
import Animate from '../src/main';
// import anime from '../anime';
// import { tweensDecompose } from '../src/tweens';

export default {
  data() {
    return {
      ani: '',
    };
  },
  mounted() {
    this.test01();
    this.test02();
    this.test03();
    this.easesDemo();
    this.drawingDemo();
    this.movingDemo();
  },
  methods: {
    test01() {
      const ani = new Animate({
        el: this.$refs.test01_circle,
        props: {
          cx: 320,
          cy: 100,
          r: 20,
        },
        duration: 2000,
        loop: true,
        alternate: true,
      });
      ani.play();
    },
    test02() {
      const ani = new Animate({
        el: this.$refs.test02_div,
        props: {
          left: '250px',
          borderRadius: '50%',
        },
        duration: 2000,
        loop: true,
        alternate: true,
      });
      ani.play();
    },
    test03() {
      const ani = new Animate({
        el: this.$refs.test03_circle,
        props: {
          // r: 50,
          fill: '#08c',
        },
        duration: 2000,
        loop: true,
        alternate: true,
      });
      ani.play();
      const aniDiv = new Animate({
        el: this.$refs.test03_div,
        props: {
          background: '#f60',
          // borderRadius: '50%',
        },
        duration: 2000,
        loop: true,
        alternate: true,
      });
      aniDiv.play();
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

        const ani = new Animate({
          el: rect,
          props: {
            x: '320',
          },
          duration: 2000,
          delay: 1000,
          easing: ease,
          loop: true,
          alternate: true,
        });
        ani.play();
        this.$refs.eases.appendChild(text);
        this.$refs.eases.appendChild(rect);
      });
    },
    drawingDemo() {
      const ani = new Animate({
        el: this.$refs.path,
        drawing: true,
        delay: 1000,
        duration: 2000,
        loop: true,
        alternate: true,
      });
      ani.play();
    },
    movingDemo() {
      const ani = new Animate({
        el: this.$refs.moving_circle,
        movingPath: this.$refs.moving_path,
        delay: 1000,
        duration: 2000,
        loop: true,
        alternate: true,
      });
      ani.play();
    },
    play() {
      this.ani.play();
    },
    pause() {
      this.ani.pause();
    },
  },
};
</script>

<style>
body {
  padding: 20px;
  background: #fff;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.page {
  padding-left: 5px;
  width: 820px;
  background: #f1f1f1;
}
.page:after {
  display: table;
  clear: both;
  content: "";
}
section {
  float: left;
  position: relative;
  margin-bottom: 5px;
  margin-right: 5px;
  width: 400px;
  border: 1px solid #eee;
  background: #fff;
}
h1 {
  padding: 20px;
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
svg {
  display: block;
}

div.play {
  position: relative;
  width: 50px;
  height: 50px;
  background: red;
}

#circle2 {
  transition: all ease 3s;
}
</style>
