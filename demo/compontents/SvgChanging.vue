<template>
  <section class="demo">
    <h2>SVG Path Changing</h2>
    <svg viewBox="0 0 300 200">
      <path
        id="svgPath"
        fill="none"
        stroke="#08c"
        stroke-width="2"
        d="M70 24 L119.574 60.369 L100.145 117.631 L50.855 101.631 L3.426 54.369z"
        style="transform: translate(30%, 20%)"
      />
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
    const t = new Totalizer();
    t.add({
      el: document.getElementById('svgPath'),
      props: {
        d: [
          'M70 24 L119.574 60.369 L100.145 117.631 L50.855 101.631 L3.426 54.369z',
          'M70 6 L136.574 54.369 L89.145 100.631 L39.855 117.631 L20.426 60.369z',
        ],
      },
      duration: 1000,
    });
    t.loop().alternate().play();
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
  margin: 0 auto;
  width: 100%;
}
</style>>
