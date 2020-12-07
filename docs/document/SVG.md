# SVG动画

## 路径绘制

<ClientOnly>
  <SvgDrawing/>
</ClientOnly>

``` javascript
const el = this.$refs.path;
const totalLen = el.getTotalLength();
el.setAttribute("stroke-dasharray", totalLen);
const animation = new Totalizer({
  el,
  props: {
    strokeDashoffset: [totalLen, 0],
  },
  duration: 2000,
  delay: 300,
  endDelay: 300
});
animation.loop().alternate().play();
```
## 路径变化

<ClientOnly>
  <SvgChanging/>
</ClientOnly>


``` javascript
const animation = new Totalizer({
  el: document.getElementById('svgPath'),
  props: {
    d: [
      "M70 24 L119.574 60.369 L100.145 117.631 L50.855 101.631 L3.426 54.369z",
      "M70 6 L136.574 54.369 L89.145 100.631 L39.855 117.631 L20.426 60.369z",
    ],
  },
  duration: 1000,
});
animation.loop().alternate().play();
```

## 路径位移

<ClientOnly>
  <SvgMoving/>
</ClientOnly>


``` javascript
const el = document.getElementById('svgCircle');

const path = document.getElementById('movingPath');
const totalLen = path.getTotalLength();

const animation = new Totalizer({
  el,
  props: {
    cx: (process) => path.getPointAtLength(totalLen * process).x,
    cy: (process) => path.getPointAtLength(totalLen * process).y,
  },
  delay: 0,
  duration: 5000,
  loop: true,
});
animation.loop().play();
```