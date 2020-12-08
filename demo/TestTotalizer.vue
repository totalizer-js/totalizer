<template>
  <div>
    <h2>Totalizer</h2>
    <div ref="el">
      <div class="target" v-for="(item, i) in items" :key="i"></div>
    </div>
    <a href="javascript:void(0)" @click="remove">移除Dom</a>
  </div>
</template>
<script>
import Totalizer from '../src/Totalizer';

export default {
  data() {
    const items = [];
    for (let i = 0; i < 1; i += 1) {
      items[i] = 1;
    }
    return {
      items,
    };
  },
  mounted() {
    for (let i = 0; i < 1000; i += 1) {
      this.totalizerFn();
    }
  },
  methods: {
    totalizerFn() {
      const ani = new Totalizer();

      document.querySelectorAll('.target').forEach((el) => {
        ani.add({
          el,
          props: {
            translateX: '100px',
          },
          easing: 'easeOutExpo',
          duration: 1000,
        });
        ani.add({
          el,
          props: {
            translateX: ['100px', '200px'],
          },
          easing: 'easeOutExpo',
          duration: 1000,
          delay: 1000,
        });
        ani.add({
          el,
          props: {
            translateX: ['200px', '300px'],
          },
          easing: 'easeOutExpo',
          duration: 1000,
          delay: 2000,
        });
      });

      ani.loop().play();
    },
    remove() {
      this.$refs.el.innerHTML = '';
    },
  },
};
</script>
<style scoped>
.target {
  width: 20px;
  height: 20px;
  background: red;
}
</style>
