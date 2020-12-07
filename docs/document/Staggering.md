# 交错动画

<ClientOnly>
  <Staggering/>
</ClientOnly>

``` javascript
// 创建一个动画迭代器
const animation = new Totalizer();

// 添加多个动画描述
const els = document.querySelectorAll("#ul li");
els.forEach((el, i) => {
  animation.add({
    el: el,
    props: {
        scale: [0.1, 1],
        background: ["#f8c555", "#fff"],
    },
    duration: 500,
    delay: i * 200,
  });
});

// 设置为循环，往返，并开始播放
animation.loop().alternate().play();
```