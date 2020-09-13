<template>
  <div ref="cont">
    <svg viewBox="0 0 300 300" ref="svg1">
      <path
        ref="path1"
        :d="line(line1)"
        stroke="#333"
        stroke-width="2"
        stroke-linecap="round"
        fill="transparent"
        stroke-dasharray="282.84"
      >
        <animate
          attributeName="stroke-dashoffset"
          begin="0s"
          dur="3s"
          from="282.84"
          to="0"
          fill="freeze"
        />
      </path>

      <circle cx="0" cy="0" r="5" stroke="black" stroke-width="1" fill="red">
        <animateMotion :path="line(line1)" begin="0s" dur="3s" fill="freeze" />
      </circle>
    </svg>
    <svg viewBox="0 0 300 300">
      <path
        ref="path2"
        :d="line(line2)"
        stroke="#333"
        stroke-width="2"
        stroke-linecap="round"
        fill="transparent"
      />
      <circle cx="0" cy="0" r="5" stroke="black" stroke-width="2" fill="#fff">
        <animateMotion :path="line(line2)" begin="0s" dur="3s" fill="freeze" />
      </circle>
    </svg>
    <svg viewBox="0 0 300 300">
      <path :d="line(line3)" />
      <circle cx="0" cy="0" r="5" stroke="black" stroke-width="1" fill="red">
        <animateMotion :path="line(line3)" begin="0s" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
    <svg viewBox="0 0 300 300">
      <path :d="line(line4)" />
      <circle cx="0" cy="0" r="5" stroke="black" stroke-width="1" fill="red">
        <animateMotion :path="line(line4)" begin="0s" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */

import line from './index';

export default {
  data() {
    return {
      line1: {
        x1: 50,
        y1: 50,
        x2: 250,
        y2: 250,
      },
      line2: {
        x1: 50,
        y1: 50,
        x2: 250,
        y2: 250,
        type: 'broken',
      },
      line3: {
        x1: 50,
        y1: 50,
        x2: 250,
        y2: 250,
        type: 'curve',
      },
      line4: {
        x1: 50,
        y1: 50,
        x2: 250,
        y2: 250,
        type: 'quadratic',
      },
    };
  },
  computed: {
    len1() {
      if (this.$refs.path1) {
        return this.$refs.path1.getTotalLength();
      } return 0;
    },
  },
  mounted() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 300 300');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.appendChild(path);

    path.setAttribute('d', line(this.line1));
    const len = path.getTotalLength();
    path.setAttribute('stroke', '#f60');
    path.setAttribute('stroke-width', '#f60');
    path.setAttribute('stroke-dasharray', len);
    path.setAttribute('stroke-dashoffset', len);
    const animate = document.createElement('animate');
    animate.setAttribute('attributeName', 'stroke-dashoffset');
    animate.setAttribute('begin', '0s');
    animate.setAttribute('dur', '3s');
    animate.setAttribute('from', len);
    animate.setAttribute('to', 0);
    animate.setAttribute('fill', 'freeze');
    path.appendChild(animate);

    this.$refs.cont.appendChild(svg);

    const s = ` <svg viewBox="0 0 300 300" ref="svg1">
      <path
        ref="path1"
        :d="line(line1)"
        stroke="#333"
        stroke-width="2"
        stroke-linecap="round"
        fill="transparent"
        stroke-dasharray="282.84"
      >
        <animate
          attributeName="stroke-dashoffset"
          begin="0s"
          dur="3s"
          from="282.84"
          to="0"
          fill="freeze"
        />
      </path>

      <circle cx="0" cy="0" r="5" stroke="black" stroke-width="1" fill="red">
        <animateMotion :path="line(line1)" begin="0s" dur="3s" fill="freeze" />
      </circle>
    </svg>`;

    this.$refs.cont.appendChild(s);

    // path.style.transition = 'none';
    // path.getBoundingClientRect();
    // path.style.transition = 'stroke-dashoffset 1s ease-in-out';
    // path.setAttribute('stroke-dashoffset', 0);
    // setTimeout(() => {
    //   console.log('second');
    //   path.setAttribute('stroke-dashoffset', len);
    //   path.style.transition = 'none';
    //   path.getBoundingClientRect();
    //   path.style.transition = 'stroke-dashoffset 1s ease-in-out';
    //   path.setAttribute('stroke-dashoffset', 0);
    // }, 2000);
    // document.querySelectorAll('path').forEach((el) => {
    //   el.setAttribute('stroke', '#333');
    //   el.setAttribute('stroke-width', '2');
    //   el.setAttribute('stroke-linecap', 'round');
    //   el.setAttribute('fill', 'transparent');
    //   const len = el.getTotalLength();
    //   // 定义实线和空白区域长度
    //   const l = [5, 5];
    //   const arr = [];
    //   let cl = len + 10;
    //   while (cl > 0) {
    //     arr.push(l[0]);
    //     arr.push(l[1]);
    //     cl -= l[0] + l[1];
    //   }
    //   if (arr.length % 2 === 0) arr.push(0, len);
    //   else arr.push(len);
    //   el.setAttribute('stroke-dasharray', arr.join(' '));
    //   // el.setAttribute('stroke-dasharray', len );
    //   // 定义初始dash部分相对起始点的偏移量,正数表示往前便宜
    //   el.setAttribute('stroke-dashoffset', len);
    //   el.style.transition = 'none';
    //   // Trigger a layout so styles are calculated & the browser
    //   // picks up the starting position before animating
    //   el.getBoundingClientRect();
    //   el.style.transition = 'stroke-dashoffset 1s ease-in-out';
    //   el.setAttribute('stroke-dashoffset', 0);
    // });
  },
  methods: {
    line(args) {
      return line(args);
    },
  },
};
</script>
<style scoped>
svg {
  width: 300px;
  float: left;
  border: 1px solid #ddd;
}
</style>
