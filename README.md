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


> The current version is in beta, and the official version is about to be released.

Totalizer JS provides a simple DOM & SVG animation description, and a mechanism for managing multiple animation descriptions. It was originally designed to create a core animation 
abstraction layer for building complex animation interaction components.

|<img src="https://totalizer-js.github.io/assets/img/staggering.cd8028d5.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/move.eda7985a.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/parallax.be7da7f1.gif" alt="gif">|
|--|--|--|
|<img src="https://totalizer-js.github.io/assets/img/svg01.f992618e.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/svg02.f66de65a.gif" alt="gif">|<img src="https://totalizer-js.github.io/assets/img/svg03.c7819b24.gif" alt="gif">|

<table>
<tr>
</tr>
</table>

## Installation

``` shell
npm i -S totalizer
```

## Usage

Import totalizer

``` javascript
import Totalizer from 'totalizer';
```

Create a Totalizer instance

``` javascript
conat animation = new Totalizer();
```

Add an animation description

``` javascript
animation.add({
  el: document.getElementById("div"),   // the target node
  props: {
    translateX: [0, 200],               // translateX from '0px' to '200px'
    background: ["#ddd", "#fff"],       // background from '#ddd' to '#fff' 
  },
  duration: 1000,                       // duration
  delay: 200,                           // delay
  easing: 'easeOutBounce',              // easing
})
```

Control the animation instance

``` javascript
animation.loop().play();
```

## Documents

For more, visit the official documentation

[totalizer-js.github.io](//totalizer-js.github.io)
## License

MIT

Copyright (c) 2020-present, Z8264