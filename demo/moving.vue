<template>
  <div id="page">
      <svg viewBox="0 0 300 300" width="300px" height="300px">
          <circle cx="0" cy="0" r="10" fill="#08c" ref="circle"/>
      </svg>

      <a href="javascript:void(0)" @click="play">Play</a>
      <a href="javascript:void(0)" @click="pause">Pause</a>
  </div>
</template>
<script>
import Animate from '../src/main';

export default {
  data() {
    return {
      ani: '',
    };
  },
  mounted() {
    this.ani = new Animate(
      this.$refs.circle,
      {
        cx: [250, 50],
        cy: [50, 250],
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
</style>
