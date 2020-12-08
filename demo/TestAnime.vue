<template>
  <div>
    <h2>anime</h2>
    <div ref="el">
      <div class="target" v-for="(item, i) in items" :key="i"></div>
    </div>
    <a href="javascript:void(0)" @click="remove">移除Dom</a>
  </div>
</template>
<script>
import anime from '../anime';

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
    for (let i = 0; i < 10000; i += 1) {
      this.animeFn();
    }
  },
  methods: {
    animeFn() {
      const tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
        loop: true,
      });

      // 增加子项
      tl.add({
        targets: '.target',
        translateX: 100,
      })
        .add({
          targets: '.target',
          translateX: 200,
        })
        .add({
          targets: '.target',
          translateX: 300,
        });
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
