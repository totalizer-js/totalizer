<h1 align="center">
  Totalizer JS
</h1>

<p align="center"><a href="//totalizer-js.github.io" target="_blank" />totalizer-js.github.io</a>
</p>

<p align="center">
 <img src="https://img.shields.io/npm/dm/totalizer.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/totalizer"><img src="https://img.shields.io/npm/v/totalizer.svg" alt="Version"></a>
  <img src="https://img.shields.io/npm/l/totalizer.svg" alt="License">
</p>


> 当前版本正处于测试阶段，正式版本即将发布。

## Introduction

Totalizer JS 提供一种简单的DOM、SVG动画描述方式，以及一个管理多个动画描述的机制。它的诞生初衷是创建一个核心的动画渲染和管理的抽象层，以便构建复杂动画交互组件。

什么时候使用 Totalizer JS？

* 制作简单的补间动画，关键帧动画等。
* 作为构建复杂动画组件的核心部分。例如，视差滚动，路径绘制，交错动画等。

## Features

Totalizer（累加器），顾名思义，可以通过添加多个动画描述，来实现复杂的动画。例如：



<p><img src="https://totalizer-js.github.io/assets/img/staggering.cd8028d5.gif" alt="gif"> <img src="https://totalizer-js.github.io/assets/img/move.eda7985a.gif" alt="gif"><img src="https://totalizer-js.github.io/assets/img/parallax.be7da7f1.gif" alt="gif"></p>
<p><img src="https://totalizer-js.github.io/assets/img/svg01.f992618e.gif" alt="gif"> <img src="https://totalizer-js.github.io/assets/img/svg02.f66de65a.gif" alt="gif"> <img src="https://totalizer-js.github.io/assets/img/svg03.c7819b24.gif" alt="gif"></p>


* [交错动画](https://totalizer-js.github.io/document/Staggering.html)：添加多个不同元素的动画描述，来实现同步或交错动画。
* [连续动画](https://totalizer-js.github.io/document/Continuous.html)：添加一个元素多个不同时间段的动画描述，来实现连续动画。
* [视差动画](https://totalizer-js.github.io/document/Parallax.html)：通过改变动画的进程来实现视差效果。
* [SVG动画](https://totalizer-js.github.io/document/SVG.html)：通过自定属性变化函数，来实现SVG动画特殊效果。

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

[totalizer-js.github.io](//totalizer-js.github.io)
## License

MIT

Copyright (c) 2020-present, Z8264