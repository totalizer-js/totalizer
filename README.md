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

> The current version is 0.1.x, and the project is in the trial run stage of production environment

Totalizer JS provides a simple DOM & SVG animation description, and a mechanism for managing multiple animation descriptions. It was originally designed to create a core animation 
abstraction layer for building complex animation interaction components.

<p align="center">
  <img src="https://totalizer-js.github.io/assets/img/show.8c1956b1.gif" alt="totalizer">
</p>

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
    translateX: [0, 300],               // translateX from '0px' to '300px'
    scale: [0.4, 1],                    // scale from 0.4 to 1 
    rotate: [0, 720],                   // rotate from 0deg to 720deg
    background: ["#ddd", "#08c"],       // background from '#ddd' to '#08c' 
  },
  delay: 300,                           // delay
  endDelay: 300,                        // endDelay
  duration: 2000,                       // duration
  easing: 'easeOutBounce',              // easing
})
```

Control the animation instance

``` javascript
animation.loop().alternate().play();
```

## Documents

For more, visit the official documentation

[totalizer-js.github.io](//totalizer-js.github.io)
## License

MIT

Copyright (c) 2020-present, Z8264