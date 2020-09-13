<template>
  <div ref="cont">
    <svg>
      <path
        ref="path"
        :d="line(lineParams)"
        stroke="#333"
        stroke-width="2"
        stroke-linecap="round"
        fill="transparent"
      />

      <path
        :d="line(line2)"
        stroke="#333"
        stroke-width="2"
        stroke-linecap="round"
        fill="transparent"
        stroke-dasharray="299.05"
      >
        <animate
          attributeName="stroke-dashoffset"
          begin="0s"
          dur="3s"
          from="299.05"
          to="0"
          fill="freeze"
        />
      </path>
    </svg>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */

import line from './index';
import Ani from './Ani';

export default {
  data() {
    return {
      lineParams: {
        x1: 50,
        y1: 50,
        x2: 250,
        y2: 250,
        type: 'curve',
      },
      line2: {
        x1: 250,
        y1: 50,
        x2: 50,
        y2: 250,
        type: 'curve',
      },
    };
  },
  computed: {

  },
  mounted() {
    const { path } = this.$refs;
    const ani = new Ani(path);

    ani.play();
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
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display: block;
  width:100%;
  height: 100%;
  border: 1px solid #ddd;
}
</style>
