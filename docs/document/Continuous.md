# 连续动画

Demo

<ClientOnly>
  <Continuous/>
</ClientOnly>

``` javascript
// 创建一个动画迭代器
const t = new Totalizer();
const el = document.getElementById("div");

// 添加多个连续动画描述
// 使用实例的只读属性 totalTime, 用来表示当前实例的总时长。
t.add({
  el,
  props: {
    translateX: [0, 280],
  },
  duration: 500,
  delay: 300,
});
t.add({
  el,
  props: {
    translateY: [0, 150],
  },
  duration: 500,
  delay: t.totalTime,
  easing: 'easeOutBounce'
});
t.add({
  el,
  props: {
    translateX: [280, 0],
  },
  duration: 500,
  delay: t.totalTime
});
t.add({
  el,
  props: {
    translateY: [150, 0],
  },
  duration: 500,
  delay: t.totalTime
});

// 设置为循环播放
t.loop().play();
```