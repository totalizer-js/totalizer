# Guide

## Introduction


## Installation

``` shell
npm i -S tolalizer
```

## Getting Started

``` javascript
import Tolalizer from 'tolalizer';

// 创建一个动画迭代器
const animation = new Tolalizer();

// 添加一个动画描述
animation.add({
    el: document.getElementById(),
    props:{
        transformX:['10px','20px'],
        background:['#def','#08c']
    },
    delay: 100,
    endDelay: 100,
    duration: 100,
    easing: ''
});

// 设置循环，并开始播放
animation.loop().play();
```

<ClientOnly>
  <Started/>
</ClientOnly>


