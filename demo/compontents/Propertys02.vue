<template>
  <div>
    <section class="demo">
      <h2>Multiple animations</h2>
      <div id="shadow"></div>
      <div id="div" ref="div"></div>
    </section>
    <section class="timeline">
      <svg viewBox="0 0 1100 350">
        <text x="1000" y="110" font-size="25" fill="#333">translation</text>
        <text x="1000" y="160" font-size="25" fill="#333">bigger</text>
        <text x="1000" y="210" font-size="25" fill="#333">smaller</text>
        <text x="1000" y="260" font-size="25" fill="#333">drop</text>

        <rect x="100" y="100" rx="0" width="800" height="10" fill="#ddd" />
        <rect x="100" y="100" rx="0" width="800" height="10" fill="#000" />
        <rect
          x="100"
          y="100"
          rx="0"
          width="0"
          height="10"
          fill="#08c"
          ref="rect"
        />

        <rect x="100" y="150" rx="0" width="800" height="10" fill="#ddd" />
        <rect x="200" y="150" rx="0" width="200" height="10" fill="#000" />
        <rect
          x="200"
          y="150"
          rx="0"
          width="0"
          height="10"
          fill="#08c"
          ref="rect2"
        />

        <rect x="100" y="200" rx="0" width="800" height="10" fill="#ddd" />
        <rect x="400" y="200" rx="0" width="200" height="10" fill="#000" />
        <rect
          x="400"
          y="200"
          rx="0"
          width="0"
          height="10"
          fill="#08c"
          ref="rect3"
        />

        <rect x="100" y="250" rx="0" width="800" height="10" fill="#ddd" />
        <rect x="500" y="250" rx="0" width="300" height="10" fill="#000" />
        <rect
          x="500"
          y="250"
          rx="0"
          width="0"
          height="10"
          fill="#08c"
          ref="rect4"
        />

        <line
          x1="100"
          y1="70"
          x2="100"
          y2="300"
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
    const el = this.$refs.div;
    t.add({
      el,
      props: {
        translateX: [0, 270],
      },
      duration: 2000,
    });

    t.add({
      el,
      props: {
        scale: [1, 2],
      },
      delay: 250,
      duration: 500,
    });

    t.add({
      el,
      props: {
        scale: [2, 1],
      },
      delay: 750,
      duration: 500,
    });

    t.add({
      el,
      props: {
        translateY: [0, 200],
      },
      delay: 1000,
      duration: 750,
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
        width: [0, 800],
      },
      duration: 2000,
    });

    t.add({
      el: this.$refs.rect2,
      props: {
        width: [0, 200],
      },
      delay: 250,
      duration: 500,
    });

    t.add({
      el: this.$refs.rect3,
      props: {
        width: [0, 200],
      },
      delay: 750,
      duration: 500,
    });

    t.add({
      el: this.$refs.rect4,
      props: {
        width: [0, 300],
      },
      delay: 1000,
      duration: 750,
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
  top: 50px;
  left: 50px;
  width: 30px;
  height: 20px;
  background: #08c;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
#shadow {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 30px;
  height: 20px;
  background: #ddd;
  border-radius: 4px;
}
</style>>
