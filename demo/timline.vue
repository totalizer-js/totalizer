<template>
  <div>
    <section>
      <svg viewBox="0 0 400 200">
        <circle cx="50" cy="100" r="9" fill="#000" ref="test01_circle" />
        <!-- <circle cx="200" cy="100" r="10" fill="#000" ref="test02_circle" /> -->
      </svg>

      <button @click="play">play</button>
      <button @click="pause">pause</button>
    </section>
  </div>
</template>

<script>
import TimeLine from '../src/TimeLine';

export default {
  data() {
    return {
      ani: null,
    };
  },
  mounted() {
    this.ani = new TimeLine();
    this.ani.add({
      el: this.$refs.test01_circle,
      props: {
        cx: [50, 200],
      },
      delay: 1000,
      duration: 1000,
    });
    this.ani.add({
      el: this.$refs.test01_circle,
      props: {
        cx: [300, 400],
      },
      delay: 3000,
      endDelay: 1000,
      duration: 1000,
    });
    // this.ani.add({
    //   el: this.$refs.test02_circle,
    //   props: {
    //     cx: 320,
    //     cy: 100,
    //     r: 20,
    //   },
    //   delay: 1000,
    //   duration: 1000,
    // });
    this.ani.loop().alternate().play();
    window.ani = this.ani;
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
  width: 400px;
}
</style>
