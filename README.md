# Dom-Animate



## 框架定位:

轻量级DOM & SVG 动画引擎



## 设计接口: 调用方式，参数，方法

```
Animate(target, attrs, options)
```

·

```
const move = Animate(
    targets,
    {
        transformX: [0,100]   //  需要改变的属性值
    },
    {
        duration: 5000, // 时长
        loop: true,  // 是否循环
        direction: 'alternate',     // 方向，是否逆向
        easing: 'easeInOutCirc',    // 缓动
        render: (ani)=>{
        		// 自定渲染函数
        },
        begin: (ani) => { 
            // 开始触发事件
        },         
        complete: (ani) => {
            // 结束触发事件
        }         
    }
)
```



### Target 目标元素



### Attrs 动画属性



### Options 动画设置

| 参数      | 类型               |      |
| --------- | ------------------ | ---- |
| duration  | Number             |      |
| loop      | Boolean            |      |
| direction | String             |      |
| easing    | String \| Function |      |
| auto      | Boolean            |      |
| begin     | Function           |      |
| complete  | Function           |      |
|           |                    |      |
|           |                    |      |



### Methods 方法



| 方法     |      | ---  |
| -------- | ---- | ---- |
| play     |      |      |
| pause    |      |      |
| reset    |      |      |
| complete |      |      |
| process  |      |      |



## 架构设计: 工程(webpack)，测试(jest)，TS



## 程序实现

设计模式（类，通信方式，策略模式）, 模块设计（循环引擎，缓动模块，参数预处理，动画数据，动画主类）



渲染引擎 engine.js

缓动模块 easing.js

数据模块 data.js（颜色，百分比，数值，角度）

动画主类 main.js







