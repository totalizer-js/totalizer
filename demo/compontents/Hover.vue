<template>
  <section class="demo" ref="demo">
    <h2 ref="h2">Hover</h2>
    <div ref="div" id="div"></div>
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
      el: this.$refs.div,
      props: {
        translateX: [0, 300],
        scale: [0.4, 1],
        rotate: [0, 720],
        background: ['#ddd', '#08c'],
      },
      duration: 2000,
      easing: 'easeOutBounce',
    });

    t.reset();

    this.$refs.demo.addEventListener('mouseover', () => {
      if (t.isReverse || !t.currentTime) t.reverse(false).play();
    });
    this.$refs.demo.addEventListener('mouseleave', () => {
      if (!t.isReverse) t.reverse(true).play();
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
#div {
  position: absolute;
  top: 50%;
  left: 25px;
  width: 60px;
  height: 40px;
  margin-top:-20px;
  background: #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,.5);
}
</style>>
