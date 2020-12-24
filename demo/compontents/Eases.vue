<template>
  <section class="demo">
    <h2>Eases</h2>
    <svg viewBox="0 0 400 200" ref="eases"></svg>
  </section>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {};
  },
  mounted() {
    [
      'linear',
      'easeOutSine',
      'easeOutQuad',
      'easeOutCubic',
      'easeOutQuart',
      'easeOutQuint',
      'easeOutExpo',
      'easeOutCirc',
      'easeOutBounce',
      'easeOutBack',
      'easeOutElastic',
    ].forEach((ease, i) => {
      const rect = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect',
      );
      rect.setAttribute('x', 120);
      rect.setAttribute('y', i * 16 + 15);
      rect.setAttribute('width', 20);
      rect.setAttribute('height', 10);
      rect.setAttribute('rx', 2);
      rect.setAttribute('fill', '#08c');
      const text = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text',
      );
      text.setAttribute('x', 20);
      text.setAttribute('y', i * 16 + 24);
      text.setAttribute('fill', '#999');
      text.innerHTML = ease;
      text.setAttribute('style', 'font-size:12px;line-height:20px;');

      const ani = new Totalizer({
        el: rect,
        props: {
          x: '320',
        },
        duration: 2000,
        easing: ease,
      });
      ani.loop().alternate().play();
      this.$refs.eases.appendChild(text);
      this.$refs.eases.appendChild(rect);
    });
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
    transform: translateY(50px);
}
</style>>
