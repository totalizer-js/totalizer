<template>
  <div class="player">
    <section class="demo" ref="demo">
      <h2 ref="h2">Hover</h2>
      <div ref="div" id="div"></div>
    </section>
    <section class="timeline">
      <svg viewBox="0 0 1000 250">
        <rect x="100" y="110" rx="0" width="800" height="10" fill="#ddd" />
        <rect x="300" y="110" rx="0" width="400" height="10" fill="#000" />

        <rect
          x="300"
          y="110"
          rx="0"
          width="0"
          height="10"
          fill="#08c"
          ref="rect"
        />

        <text x="200" y="165" font-size="25" fill="#333">delay</text>
        <text x="500" y="165" font-size="25" fill="#333">duration</text>
        <text x="800" y="165" font-size="25" fill="#333">endDelay</text>

        <line
          x1="100"
          y1="70"
          x2="100"
          y2="160"
          stroke="#08c"
          stroke-width="4"
          ref="line"
        />
      </svg>
    </section>
    <section class="controll">
      <a href="javascript:void(0)" v-if="isPlaying" @click="t.pause()">Pause</a>
      <a href="javascript:void(0)" v-else @click="t.play()">Play</a>

      <a href="javascript:void(0)" @click="t.reset()">Reset</a>
      <a href="javascript:void(0)" @click="t.finish()">Finish</a>

      <a href="javascript:void(0)" @click="t.reverse()">Reverse</a>
      <a href="javascript:void(0)" @click="t.loop()">Loop</a>
      <a href="javascript:void(0)" @click="t.alternate()">Alternate</a>
    </section>
  </div>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {
      t: null,
      isReverse: false,
      isPlaying: false,
      isLoop: false,
    };
  },
  mounted() {
    const t = new Totalizer();

    t.add({
      el: this.$refs.div,
      props: {
        translateX: [0, 300],
        scale: [0.4, 1],
        rotate: [0, 720],
        background: ['#ddd', '#08c'],
      },
      delay: 500,
      endDelay: 500,
      duration: 1000,
      //   easing: 'easeOutBounce',
    });

    t.add({
      el: this.$refs.line,
      props: {
        x1: [100, 900],
        x2: [100, 900],
      },
      duration: 2000,
    });

    t.add({
      el: this.$refs.rect,
      props: {
        width: [0, 400],
      },
      delay: 500,
      duration: 1000,
    });

    t.reset();

    Object.defineProperty(t, 'isPlaying', {
      get: () => this.isPlaying,
      set: (value) => {
        this.isPlaying = value;
      },
    });
    Object.defineProperty(t, 'isReverse', {
      get: () => this.isReverse,
      set: (value) => {
        this.isReverse = value;
      },
    });
    Object.defineProperty(t, 'isLoop', {
      get: () => this.isLoop,
      set: (value) => {
        this.isLoop = value;
      },
    });

    this.t = t;
  },
  methods: {},
};
</script>
<style scoped>
.player {
  position: relative;
}
.demo {
  margin-top: 10px;
  position: relative;
  height: 300px;
  max-width: 400px;
  background: #f1f1f1;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
h2 {
  position: absolute;
  padding: 0;
  margin: 0;
  right: 15px;
  top: 0px;
  line-height: 40px;
  color: #08c;
  font-size: 16px;
  font-weight: normal;
  border: none;
  text-shadow: 1px 1px 0 #fff;
}
#div {
  position: absolute;
  top: 50%;
  left: 25px;
  width: 60px;
  height: 40px;
  margin-top: -20px;
  background: #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.timeline {
  position: absolute;
  top: 210px;
  left: 0;
  width: 400px;
}
.controll {
  margin-top: 10px;
  padding: 26px 0 0 10px;
  box-sizing: border-box;
  position: relative;
  height: 70px;
  max-width: 400px;
  background: #f1f1f1;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
.controll a {
  display: block;
  float: left;
  margin-right: 5px;
  padding: 0 10px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 12px;
  color: #333;
  text-decoration: none;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: all ease-out 0.3s;
}
.controll a:first-child {
  width: 45px;
}
.controll a:last-child {
  margin: 0;
}
.controll a:active {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5) inset;
}
</style>>
