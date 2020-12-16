# 交错动画

<ClientOnly>
  <Staggering/>
</ClientOnly>

``` javascript
// 创建一个动画迭代器
const t = new Totalizer();

// 添加多个动画描述
const els = document.querySelectorAll("#ul li");
els.forEach((el, i) => {
  t.add({
    el: el,
    props: {
      scale: [0.5, 1],
      rotate: [0, 360],
      background: ["#333", "#08c"],
    },
    duration: 500,
    delay: (parseInt(i/5) + (i % 5)) * 200,
  });
});

// 设置为循环，往返，并开始播放
t.loop().alternate().play();
```