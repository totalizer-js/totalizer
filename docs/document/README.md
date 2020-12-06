# 指南

## 介绍 


## 安装

``` shell
npm i -S tolalizer
```

## 快速开始

示例：

<ClientOnly>
  <Started/>
</ClientOnly>

``` javascript
import Tolalizer from 'tolalizer';

// 创建一个动画迭代器
const animation = new Tolalizer();

// 添加一个动画描述
animation.add({
    el: document.getElementById('div'),
    props:{
        translateX:['0','200px'],
        background:['#08c','#fff']
    },
    delay: 100,
    endDelay: 100,
    duration: 1000,
});

// 设置为循环，往返，并开始播放
animation.loop().alternate().play();
```





