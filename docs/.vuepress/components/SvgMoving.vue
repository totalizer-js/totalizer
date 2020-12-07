<template>
  <section class="demo">
    <svg viewBox="0 0 100 100">
      <path
        id="movingPath"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        color="#fff"
        d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"
      ></path>
      <circle cx="20" cy="10" r="5" fill="#f8c555" id="svgCircle" />
    </svg>
  </section>
</template>
<script>
import Totalizer from "../../../src/Totalizer";

export default {
  data() {
    return {};
  },
  mounted() {
    const el = document.getElementById('svgCircle');

    const path = document.getElementById('movingPath');
    const totalLen = path.getTotalLength();

    const animation = new Totalizer({
      el,
      props: {
        cx: (process) => path.getPointAtLength(totalLen * process).x,
        cy: (process) => path.getPointAtLength(totalLen * process).y,
      },
      delay: 0,
      duration: 5000,
      loop: true,
    });
    animation.loop().play();
  },
  methods: {},
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  background: #333;
  border-radius: 5px;
}
svg {
  display: block;
  margin: 0 auto;
  max-width: 300px;
}
</style>>

