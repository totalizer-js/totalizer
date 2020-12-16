<template>
  <section class="demo">
    <svg viewBox="0 0 1024 300">
      <circle fill="#fed" cx="100" cy="80" r="40" ref="circle"/>
      <text x="100" y="90" font-size="30" fill="#333" ref="text">el</text>

      <rect x="100" y="200" rx="10" width="200" height="30" fill="#aaa" />
      <rect x="300" y="200" rx="10" width="400" height="30" fill="#ddd" />
      <rect x="700" y="200" rx="10" width="200" height="30" fill="#aaa" />

      <rect
        x="100"
        y="200"
        rx="10"
        width="0"
        height="30"
        fill="#def"
        ref="rect1"
      />
      <rect
        x="300"
        y="200"
        rx="10"
        width="0"
        height="30"
        fill="#fed"
        ref="rect2"
      />
      <rect
        x="700"
        y="200"
        rx="10"
        width="0"
        height="30"
        fill="#def"
        ref="rect3"
      />

      <text x="200" y="223" font-size="20" fill="#333">1000</text>
      <text x="500" y="223" font-size="20" fill="#333">2000</text>
      <text x="800" y="223" font-size="20" fill="#333">1000</text>

      <text x="200" y="265" font-size="25" fill="#fff">delay</text>
      <text x="500" y="265" font-size="25" fill="#fff">duration</text>
      <text x="800" y="265" font-size="25" fill="#fff">endDelay</text>

      <!-- <line
        x1="100"
        y1="170"
        x2="100"
        y2="260"
        stroke="#aaa"
        stroke-width="4"
        stroke-dasharray="10 2"
      />
      <line
        x1="900"
        y1="170"
        x2="900"
        y2="260"
        stroke="#aaa"
        stroke-width="4"
        stroke-dasharray="10 2"
      />
      <line
        x1="300"
        y1="170"
        x2="300"
        y2="260"
        stroke="#aaa"
        stroke-width="4"
        stroke-dasharray="10 2"
      />
      <line
        x1="600"
        y1="170"
        x2="600"
        y2="260"
        stroke="#aaa"
        stroke-width="4"
        stroke-dasharray="10 2"
      /> -->

      <line
        x1="100"
        y1="170"
        x2="100"
        y2="260"
        stroke="#fed"
        stroke-width="4"
        ref="line"
      />
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
    const animation = new Totalizer();

    animation.add({
      el: this.$refs.circle,
      props: {
        cx: [100, 900],
      },
      delay:1000,
      endDelay:1000,
      duration: 2000,
      easing: 'easeOutBounce',
    });

    animation.add({
      el: this.$refs.text,
      props: {
        x: [100, 900],
      },
      delay:1000,
      endDelay:1000,
      duration: 2000,
      easing: 'easeOutBounce',
    });

    animation.add({
      el: this.$refs.line,
      props: {
        x1: [100, 900],
        x2: [100, 900],
      },
      duration: 4000,
    });

    animation.add({
      el: this.$refs.rect1,
      props: {
        width: [0, 200],
      },
      delay: 0,
      duration: 1000,
    });
    animation.add({
      el: this.$refs.rect2,
      props: {
        width: [0, 400],
      },
      delay: 1000,
      duration: 2000,
    });
    animation.add({
      el: this.$refs.rect3,
      props: {
        width: [0, 200],
      },
      delay: 3000,
      duration: 1000,
    });

    animation.loop().alternate().play();
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
  box-shadow: 0 1px 2px rgba(0,0,0,.5);
}
h2 {
  position:absolute;
  padding:0;
  margin:0;
  right:15px;
  top:0px;
  line-height:40px;
  color:#08c;
  font-size:16px;
  font-weight: normal;
  border:none;
  text-shadow: 1px 1px 0 #fff;
}
svg {
  display: block;
  width: 100%;
}
text {
  text-anchor: middle;
}
</style>>

