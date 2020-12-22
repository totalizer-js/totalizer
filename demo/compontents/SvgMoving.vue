<template>
  <section class="demo">
    <h2>SVG Path Moving</h2>
    <svg viewBox="0 0 100 100">
      <path
        id="movingPath"
        fill="none"
        stroke="#08c"
        stroke-width="1"
        d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"
      ></path>
      <circle cx="20" cy="10" r="5" fill="#f60" id="svgCircle" />
    </svg>
  </section>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {};
  },
  mounted() {
    const el = document.getElementById('svgCircle');

    const path = document.getElementById('movingPath');
    const totalLen = path.getTotalLength();

    const t = new Totalizer();
    t.add({
      el,
      props: {
        cx: (process) => path.getPointAtLength(totalLen * process).x,
        cy: (process) => path.getPointAtLength(totalLen * process).y,
      },
      delay: 0,
      duration: 2000,
      loop: true,
    });
    t.loop().play();
  },
  methods: {},
};
</script>
<style scoped>
.demo {
  margin-top:10px;
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
svg {
  display: block;
  width: 300px;
  padding-left:80px;
}
</style>>
