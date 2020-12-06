<template>
  <div style="position:relative;">
    <!-- <svg class="svg-defs">
      <g>
        <defs>
          <path
            id="path1"
            transform="scale(2)"
            d="M 30,30 150,30 50,50 140,70 "
            fill="none"
            stroke="red"
          ></path>

          <path id="half-c" d="M 20,20 C 150,20 150,150 20,150"></path>

          <path
            id="MyPath-save"
            d="M 100 200 
             C 200 100 300   0 400 100
             C 500 200 600 300 700 200
             C 800 100 900 100 900 100"
          ></path>
          <path
            id="MyPath1"
            ref="path1"
            d="M 50 200 A226,110 0 0,1 500,200"
            transform="scale(.9)"
          ></path>
          <path
            id="MyPath2"
            d="M 80 150 
             L 500 150"
            transform="scale(.6)"
          ></path>

          <linearGradient id="v-gradient" x1="0" y1="0" x2="100%" y2="0%">
            <stop stop-color="hsl(45,100%,65%)" offset="0"></stop>
            <stop stop-color="hsl(320,100%,65%)" offset="50%"></stop>
            <stop stop-color="hsl(200,100%,60%)" offset="100%"></stop>
          </linearGradient>

          <linearGradient id="MyGradient" x1="0" y1="0" x2="100%" y2="0%" ref="color">
            <stop offset="0%" stop-color="crimson"></stop>
            <stop offset="10%" stop-color="purple"></stop>
            <stop offset="10%" stop-color="red"></stop>
            <stop offset="20%" stop-color="crimson"></stop>
            <stop offset="20%" stop-color="orangered"></stop>
            <stop offset="30%" stop-color="red"></stop>
            <stop offset="30%" stop-color="orange"></stop>
            <stop offset="40%" stop-color="orangered"></stop>
            <stop offset="40%" stop-color="gold"></stop>
            <stop offset="50%" stop-color="orange"></stop>
            <stop offset="50%" stop-color="yellowgreen"></stop>
            <stop offset="60%" stop-color="gold"></stop>
            <stop offset="60%" stop-color="green"></stop>
            <stop offset="70%" stop-color="yellowgreen"></stop>
            <stop offset="70%" stop-color="steelblue"></stop>
            <stop offset="80%" stop-color="skyblue"></stop>
            <stop offset="80%" stop-color="mediumpurple"></stop>
            <stop offset="90%" stop-color="steelblue"></stop>
            <stop offset="90%" stop-color="purple"></stop>
            <stop offset="100%" stop-color="mediumpurple"></stop>
          </linearGradient>

          <pattern
            id="p-stripes"
            patternUnits="userSpaceOnUse"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <rect width="200" height="200" fill="url(#MyGradient)"></rect>
          </pattern>
        </defs>
      </g>
    </svg>
    <svg class="texts" viewBox="0 0 500 300">
      <text class="text-1" transform="translate(0)">
        <textPath xlink:href="#MyPath1">
          &nbsp;&nbsp;Totalizer&nbsp;&nbsp;
        </textPath>
      </text>

      <text class="text-2" transform="translate(95 85)">
        <textPath xlink:href="#MyPath2" font-size="20">JS Animation Library</textPath>
      </text>
    </svg> -->
    

    <svg viewBox="0 0 1024 1024" class="timeline">
      <rect x="100" y="100" width="300" height="100" fill="#ddd" />
      <rect x="100" y="100" width="0" height="100" fill="#b1d3dc" ref="rect1" />
      <text x="250" y="170" font-size="60" text-anchor="middle">Totalizer</text>

      <rect x="100" y="200" width="200" height="100" fill="#f1f1f1" />
      <rect x="300" y="200" width="300" height="100" fill="#ddd" />
      <rect x="300" y="200" width="0" height="100" fill="#b1d3dc" ref="rect2" />
      <text x="450" y="260" font-size="20" text-anchor="middle">1500 ms</text>

      <rect x="100" y="300" width="400" height="100" fill="#f1f1f1" />
      <rect x="500" y="300" width="200" height="100" fill="#ddd" />
      <rect x="500" y="300" width="0" height="100" fill="#b1d3dc" ref="rect3" />
      <text x="600" y="360" font-size="20" text-anchor="middle">1000 ms</text>

      <rect x="100" y="400" width="600" height="100" fill="#f1f1f1" />
      <rect x="700" y="400" width="200" height="100" fill="#ddd" />
      <rect x="700" y="400" width="0" height="100" fill="#b1d3dc" ref="rect4" />
      <text x="800" y="460" font-size="20" text-anchor="middle">1000 ms</text>

      <line x1="50" y1="100" x2="950" y2="100" stroke="#666" stroke-width="1" />
      <line x1="50" y1="200" x2="950" y2="200" stroke="#666" stroke-width="1" />
      <line x1="50" y1="300" x2="950" y2="300" stroke="#666" stroke-width="1" />
      <line x1="50" y1="400" x2="950" y2="400" stroke="#666" stroke-width="1" />
      <line x1="50" y1="500" x2="950" y2="500" stroke="#666" stroke-width="1" />

      <line
        x1="100"
        y1="50"
        x2="100"
        y2="550"
        stroke="#666"
        stroke-width="1"
        stroke-dasharray="0"
      />
      <line
        x1="900"
        y1="50"
        x2="900"
        y2="550"
        stroke="#666"
        stroke-width="1"
        stroke-dasharray="0"
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
import Tolalizer from '../../../src/Totalizer';

export default {
  mounted() {
    
    this.logo();
    this.line();
  },
  methods: {
    logo(){
      // const ani = new Tolalizer();
      // ani.add({
      //   el: this.$refs.path1,
      //   props: {
      //     d:[
      //       'M 50 200 A226,110 0 0,1 500,200',
      //       'M 40 200 A326,220 0 0,1 550,200']
      //   },
      //   delay: 500,
      //   endDelay: 500,
      //   duration: 2000,
      // });
      // ani.loop().alternate().play();
    },

    line() {
      const ani = new Tolalizer();
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
          width: 300,
        },
        duration: 1500,
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

<style scoped>
svg.timeline {
  display:block;
  margin:0 auto;
  max-width:500px;
  border: 1px dashed #ddd;
}
</style>
