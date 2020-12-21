<h2 align="center">
  Totalizer JS
</h2>

<p align="center"><a href="//totalizer-js.github.io" target="_blank" />totalizer-js.github.io</a>
</p>

<p align="center">
 <img src="https://img.shields.io/npm/dm/totalizer.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/totalizer"><img src="https://img.shields.io/npm/v/totalizer.svg" alt="Version"></a>
  <img src="https://img.shields.io/npm/l/totalizer.svg" alt="License">
</p>


> 当前版本正处于测试阶段，正式版本即将发布。
> 
Totalizer JS 提供一种简单的DOM、SVG动画描述方式，以及一个管理多个动画描述的机制。它的诞生初衷是创建一个核心的动画渲染和管理的抽象层，以便构建复杂动画交互组件。

|<img src="https://totalizer-js.github.io/assets/img/staggering.cd8028d5.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/move.eda7985a.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/parallax.be7da7f1.gif" alt="gif">|
|--|--|--|
|<img src="https://totalizer-js.github.io/assets/img/svg01.f992618e.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/svg02.f66de65a.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/svg03.c7819b24.gif" alt="gif">|

## Installation

``` shell
npm i -S totalizer
```

## Usage

引入

``` javascript
import Totalizer from 'totalizer';
```

创建一个动画实例

``` javascript
conat animation = new Totalizer();
```

添加一个动画描述

``` javascript
animation.add({
  el: document.getElementById("div"),   // 动画节点
  props: {
    translateX: [0, 200],               // 偏移量从 0px 变为 200px
    background: ["#ddd", "#fff"],       // 背景色从 #ddd 变为 #fff 
  },
  duration: 1000,                       // 动画持续时间
  delay: 200,                           // 动画延时
  easing: 'easeOutBounce',              // 缓动效果
})
```

控制动画实例

``` javascript
// 循环播放
animation.loop().play();
```

## Documents

更多内容请访问文档：

[totalizer-js.github.io](//totalizer-js.github.io)
## License

MIT

Copyright (c) 2020-present, Z8264