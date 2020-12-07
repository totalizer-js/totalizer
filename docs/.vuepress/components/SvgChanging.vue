<template>
  <section class="demo">
    <svg viewBox="0 0 300 200">
      <path
        id="svgPath"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        color="#fff"
        d="M70 24 L119.574 60.369 L100.145 117.631 L50.855 101.631 L3.426 54.369z"
        style="transform: translate(30%, 20%)"
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
    const animation = new Totalizer({
      el: document.getElementById('svgPath'),
      props: {
        d: [
          "M70 24 L119.574 60.369 L100.145 117.631 L50.855 101.631 L3.426 54.369z",
          "M70 6 L136.574 54.369 L89.145 100.631 L39.855 117.631 L20.426 60.369z",
        ],
      },
      duration: 1000,
    });
    animation.loop().alternate().play();
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
  max-width: 500px;
}
</style>>

