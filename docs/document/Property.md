# 动画描述

## 单个动画描述

<ClientOnly>
  <Propertys/>
</ClientOnly>

CODE EXAMPLE

``` javascript
const t = new Totalizer();
t.add({
  el: document.getElementById("div"),
  props: {
    translateX: [0, 270],
  },
  delay: 500,
  endDelay: 500,
  duration: 1000,
  easing: "easeOutBounce",
});
```

## 多个动画描述

<ClientOnly>
  <Propertys02/>
</ClientOnly>


``` javascript
const t = new Totalizer();
const el = document.getElementById("div");
t.add({
  el,
  props: {
    translateX: [0, 270],
  },
  duration: 2000,
});

t.add({
  el,
  props: {
    scale: [1, 2],
  },
  delay:250,
  duration: 500,
});

t.add({
  el,
  props: {
    scale: [2, 1],
  },
  delay:750,
  duration: 500,
});

t.add({
  el,
  props: {
    translateY: [0, 200],
  },
  delay:1000,
  duration: 750,
  easing: "easeOutBounce",
});
```

## API


### el

类型：`DOM`,`SVG`

目标元素，DOM或SVG

### props
类型：`JSON`

动画需要改变的属性描述，元素属性/CSS属性

### delay

类型：`Number`

动画播放前，延迟时间

### endDelay

类型：`Number`

动画结束后，等待时间
### duration

类型：`Number`

动画播放时，持续时间

### easing

类型：`String`,`Function`

缓动。