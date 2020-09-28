<template>
  <div ref="cont">
    <p class="debug">
      <span id="raf"></span>
      <span id="instances"></span>
      <span id="cur"></span>
    </p>
    <div class="el"></div>
    <svg>
      <path ref="path2" fill="none" stroke="#f60" stroke-width="1" d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"></path>
      <circle cx="150" cy="150" r="50" stroke="black" stroke-width="2" fill="rgba(0,0,0,0)"  ref="path1"/>
    </svg>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
// import line from './index';
import Drawing from './drawing';
import anime from './anime';

export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // eslint-disable-next-line no-new
    // eslint-disable-next-line no-unused-vars
    const path1 = new Drawing(this.$refs.path1, {
      dur: 2000,
      loop: true,
      autoplay: true,
    });

    // eslint-disable-next-line no-unused-vars
    const path2 = new Drawing(this.$refs.path2, {
      dur: 4000,
      loop: true,
      autoplay: true,
    });

    anime({
      targets: '.el',
      translateX: 250,
      loop: true,
      duration: 2000,
      delay: 1000,
      direction: 'alternate',
    });
    // document.querySelector('.el').addEventListener('click', () => {
    //   anime({
    //     targets: '.el',
    //     translateX: 250,
    //   });
    // });

    // a.play();
    // setTimeout(() => {
    //   a.play();
    // }, 1000);
    // setTimeout(() => {
    //   a.pause();
    // }, 2000);
    // setTimeout(() => {
    //   a.play();
    // }, 3000);
    // setTimeout(() => {
    //   a.pause();
    // }, 5000);
  },
  methods: {},
};
</script>
<style scoped>
svg {
  position:fixed;
  top:100px;
  bottom:0;
  left:20px;
  right:20px;
  display: block;
  width:100%;
  height: 100%;
  border: 1px solid #ddd;
}
.debug {
  width:100%;
  padding: 20px;
  overflow: hidden;
}
.debug span{
  display:block;
  float:left;
  width:25%;
}

.el {
  width:10px;
  height:10px;
  background:red;
}
</style>
