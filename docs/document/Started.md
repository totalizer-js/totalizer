 # 快速开始

Demo

<ClientOnly>
  <Started/>
</ClientOnly>

引入

``` javascript
import Totalizer from 'totalizer';
```

创建一个 Totalizer 实例

``` javascript
conat t = new Totalizer();
```

添加一个动画描述到实例中

``` javascript
t.add({
  el: document.getElementById("div"),   // 动画节点
  props: {
    translateX: [0, 300],               // 偏移量从 0px 变为 200px
    scale: [0.4, 1],                    // 缩放 0.4 倍变为 1 倍
    rotate: [0, 720],                   // 旋转 0deg 变为 720deg
    background: ["#333", "#08c"],       // 背景色从 #333 变为 #08c 
  },
  delay: 300,                           // 播放延时
  endDelay: 300,                        // 结束延时
  duration: 2000,                       // 动画持续时长
  easing: 'easeOutBounce',              // 动画缓动效果
});
```

控制动画实例

``` javascript
// 设置为循环，往返，并开始播放
t.loop().alternate().play();
```

