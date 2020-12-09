<template>
  <div>
    <svg viewBox="0 0 1024 1024">
      <g ref="g"></g>
    </svg>
    <svg viewBox="0 0 1024 1024">
      <rect x="100" y="100" width="200" height="100" fill="#ddd" />
      <rect x="100" y="100" width="0" height="100" fill="#b1d3dc" ref="rect1" />
      <text x="200" y="160" font-size="30" text-anchor="middle">1000 ms</text>

      <rect x="100" y="200" width="200" height="100" fill="#f1f1f1" />
      <rect x="300" y="200" width="300" height="100" fill="#ddd" />
      <rect x="300" y="200" width="0" height="100" fill="#b1d3dc" ref="rect2" />
      <text x="450" y="260" font-size="30" text-anchor="middle">1500 ms</text>

      <rect x="100" y="300" width="400" height="100" fill="#f1f1f1" />
      <rect x="500" y="300" width="200" height="100" fill="#ddd" />
      <rect x="500" y="300" width="0" height="100" fill="#b1d3dc" ref="rect3" />
      <text x="600" y="360" font-size="30" text-anchor="middle">1000 ms</text>

      <rect x="100" y="400" width="600" height="100" fill="#f1f1f1" />
      <rect x="700" y="400" width="200" height="100" fill="#ddd" />
      <rect x="700" y="400" width="0" height="100" fill="#b1d3dc" ref="rect4" />
      <text x="800" y="460" font-size="30" text-anchor="middle">1000 ms</text>

      <line x1="50" y1="100" x2="950" y2="100" stroke="#666" stroke-width="4" />
      <line x1="50" y1="200" x2="950" y2="200" stroke="#666" stroke-width="4" />
      <line x1="50" y1="300" x2="950" y2="300" stroke="#666" stroke-width="4" />
      <line x1="50" y1="400" x2="950" y2="400" stroke="#666" stroke-width="4" />
      <line x1="50" y1="500" x2="950" y2="500" stroke="#666" stroke-width="4" />

      <line
        x1="100"
        y1="50"
        x2="100"
        y2="550"
        stroke="#333"
        stroke-width="4"
        stroke-dasharray="5"
      />
      <line
        x1="900"
        y1="50"
        x2="900"
        y2="550"
        stroke="#333"
        stroke-width="4"
        stroke-dasharray="5"
      />

      <line
        x1="100"
        y1="50"
        x2="100"
        y2="550"
        stroke="#08c"
        stroke-width="4"
        ref="line"
      />
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

    const { duration } = ani;
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
          delay: duration,
          endDelay: 500,
        });
      }
    }
    ani.loop().alternate().play();
    // ani.process(1);
    window.ani = ani;
    this.line();
  },
  methods: {
    line() {
      const ani = new Totalizer();
      ani.add({
        el: this.$refs.line,
        props: {
          x1: [100, 900],
          x2: [100, 900],
        },
        duration: 4000,
      });

      ani.add({
        el: this.$refs.rect1,
        props: {
          width: 200,
        },
        duration: 1000,
      });

      ani.add({
        el: this.$refs.rect2,
        props: {
          width: 300,
        },
        delay: 1000,
        duration: 1500,
      });

      ani.add({
        el: this.$refs.rect3,
        props: {
          width: 200,
        },
        delay: 2000,
        duration: 1000,
      });

      ani.add({
        el: this.$refs.rect4,
        props: {
          width: 200,
        },
        delay: 3000,
        duration: 1000,
      });

      ani.loop().alternate().play();
    },
  },
};
</script>

<style>
svg {
  /* width: 400px; */
  border: 1px solid #ddd;
}
</style>
