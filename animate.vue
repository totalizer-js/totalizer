<template>
  <div ref="cont">
    <p class="debug">
      <span id="raf"></span>
      <span id="instances"></span>
    </p>
    <svg>
      <!-- <path d="M50 50 L 250 250" stroke="#333" ref="path"/> -->
      <circle cx="150" cy="150" r="100" stroke="black" stroke-width="2" fill="rgba(0,0,0,0)"  ref="path"/>
    </svg>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
// import line from './index';
import Drawing from './drawing';

export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {
    const a = new Drawing(this.$refs.path, {
      dur: 2000,
    });
    setTimeout(() => {
      a.play();
    }, 1000);
    setTimeout(() => {
      a.pause();
    }, 2000);
    setTimeout(() => {
      a.play();
    }, 3000);
    setTimeout(() => {
      a.play();
    }, 5000);
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
</style>
