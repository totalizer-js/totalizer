<template>
  <div>
    <section class="demo">
      <h2>Sample Animation</h2>
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
  </div>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {};
  },
  mounted() {
    const t = new Totalizer();

    t.add({
      el: this.$refs.div,
      props: {
        translateX: [0, 270],
      },
      delay: 500,
      endDelay: 500,
      duration: 1000,
      easing: 'easeOutBounce',
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

    t.loop().alternate().play();
  },
  methods: {},
};
</script>
<style scoped>
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
.timeline {
  margin-top: 10px;
  position: relative;
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
  width: 100%;
}
text {
  text-anchor:middle;
}
#div {
  position: absolute;
  top: 50%;
  left: 50px;
  width: 30px;
  height: 20px;
  margin-top: -10px;
  background: #08c;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>>
