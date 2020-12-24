<template>
  <div>
    <svg viewBox="0 0 1024 1024">
      <g ref="g"></g>
    </svg>
  </div>
</template>

<script>
import Totalizer from '../src/Totalizer';

export default {
  mounted() {
    const rects = [];
    const num = 16;
    for (let i = 0; i < num; i += 1) {
      rects[i] = [];
      for (let j = 0; j < num; j += 1) {
        const rect = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'rect',
        );
        rect.setAttribute('x', i * 64 + 2 + 30);
        rect.setAttribute('y', j * 64 + 2 + 30);
        rect.setAttribute('width', 10);
        rect.setAttribute('height', 10);
        rect.setAttribute('rx', 10);

        rect.setAttribute('fill', '#08c');
        rects[i][j] = rect;

        this.$refs.g.appendChild(rect);
      }
    }
    const ani = new Totalizer();
    for (let i = 0; i < num; i += 1) {
      for (let j = 0; j < num; j += 1) {
        ani.add({
          el: rects[i][j],
          props: {
            width: [10, 60],
            height: [10, 60],
            x: [i * 64 + 2 + 30, i * 64 + 2],
            y: [j * 64 + 2 + 30, j * 64 + 2],
          },
          duration: 500,
          delay: (Math.abs(i - 8) + Math.abs(j - 8)) * 100,
        });
      }
    }

    const { totalTime } = ani;
    for (let i = 0; i < num; i += 1) {
      for (let j = 0; j < num; j += 1) {
        ani.add({
          el: rects[i][j],
          props: {
            width: [60, 10],
            height: [60, 10],
            x: [i * 64 + 2, i * 64 + 2 + 30],
            y: [j * 64 + 2, j * 64 + 2 + 30],
          },
          duration: 500,
          delay: totalTime,
          endDelay: 500,
        });
      }
    }
    ani.loop().alternate().play();
    // ani.process(1);
    window.ani = ani;
  },
  methods: {

  },
};
</script>

<style>

</style>
