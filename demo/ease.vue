<template>
  <div id="page">
      <div id="title">
        <h1> 缓动函数测试 </h1>
        <p>通过时间的变化控制参数值变化的速率</p>
      </div>
      <div id="cont">
      </div>
  </div>
</template>

<script>
import easing from '../src/eases';

export default {

  mounted() {
    Object.keys(easing).forEach((key) => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 300 300');

      const padding = 50;
      const width = 300 - 2 * padding;

      const ly = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ly.setAttribute('x1', padding);
      ly.setAttribute('y1', padding);
      ly.setAttribute('x2', padding);
      ly.setAttribute('y2', padding + width);
      ly.setAttribute('stroke', '#aaa');
      ly.setAttribute('stroke-width', 2);
      svg.appendChild(ly);

      const lx = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lx.setAttribute('x1', padding);
      lx.setAttribute('y1', padding + width);
      lx.setAttribute('x2', padding + width);
      lx.setAttribute('y2', padding + width);
      lx.setAttribute('stroke', '#aaa');
      lx.setAttribute('stroke-width', 2);
      svg.appendChild(lx);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.innerHTML = key;
      text.setAttribute('x', 150);
      text.setAttribute('y', padding - 10);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#333');
      text.setAttribute('font-size', '20');
      svg.appendChild(text);

      document.getElementById('cont').appendChild(svg);

      for (let i = 0; i <= width; i += 5) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        circle.setAttribute('cx', i + padding);
        circle.setAttribute('cy', width - (i ? width * easing[key]()(i / width) : 0) + padding);
        circle.setAttribute('r', 2);
        svg.appendChild(circle);
      }
    });
  },
};
</script>

<style>
#page {
    padding: 20px 20px 100px;
}
#title {
    position: absolute;
    left: 25%;
    top: 20px;
}
#cont {
    width:100%;
    overflow:hidden;
}
svg{
    display:block;
    box-sizing: border-box;
    float:left;
    width:16.666%;
    /* border:1px solid #ddd; */
}
svg:nth-child(2){
    clear: both;
}
</style>
