 # 快速开始

Demo

<ClientOnly>
  <Started/>
</ClientOnly>

CODE EXAMPLE

``` javascript
import Totalizer from 'Totalizer';

// 创建一个动画迭代器
const animation = new Totalizer();

// 添加一个动画描述
animation.add({
  el: document.getElementById("div"),
  props: {
    translateX: ["0px", "200px"],
    background: ["#f8c555", "#fff"],
  },
  duration: 1000,
});

// 设置为循环，往返，并开始播放
animation.loop().alternate().play();
```

