# 动画描述

Demo

<ClientOnly>
  <Propertys/>
</ClientOnly>

CODE EXAMPLE

``` javascript
{
  el: document.getElementById('svgCircle'),
  props: {
    cx: [100, 900],
  },
  delay:1000,
  endDelay:1500,
  duration: 1500,
  easing: 'easeOutBounce',
}
```

## API


### el

类型：`DOM`,`SVG`

目标元素，DOM或SVG

### props
类型：`JSON`

动画需要改变的属性描述，元素属性/CSS属性

### delay

类型：`Number`

动画播放前，延迟时间

### endDelay

类型：`Number`

动画结束后，等待时间
### duration

类型：`Number`

动画播放时，持续时间

### easing

类型：`String`,`Function`

缓动。