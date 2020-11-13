<template>
  <div id="page">
      <svg viewBox="0 0 300 300" width="300px" height="300px">
          <circle cx="250" cy="50" r="10" fill="#08c" ref="circle"/>
      </svg>

      <div ref="div" class="play">
      </div>

      <a href="javascript:void(0)" @click="play">Play</a>
      <a href="javascript:void(0)" @click="pause">Pause</a>
  </div>
</template>
<script>
import Animate from '../src/main';
import anime from '../anime';

export default {
  data() {
    return {
      ani: '',
    };
  },
  mounted() {
    const demo = anime({
      targets: this.$refs.div,
      // backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
      // borderRadius: ['0%', '50%'],
      width: '200px',
      height: '200',
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
      duration: 1000,
      delay: 200,
      endDelay: 200,
    });
    demo.play();

    this.ani = new Animate(
      this.$refs.circle,
      {
        cx: 50,
        cy: 250,
        k: [0, 10],
      },
      {
        duration: 1000,
        delay: 200,
        endDelay: 200,
        easing: 'easeOutBounce',
        loop: true,
        alternate: true,
      },
    );
    this.ani.play();
  },
  methods: {
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
svg {
    border: 1px solid #ddd;
}

div.play {
  position:relative;
  width: 50px;
  height: 50px;
  background:red;
}
</style>
