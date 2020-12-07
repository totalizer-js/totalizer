# 动画控制
Demo

<ClientOnly>
  <Methods/>
</ClientOnly>


## API

### add

将一个动画描述到 Totalizer 的实例中。可以向 Totalizer 实例中添加多个动画描述，以便实现复杂的动画。

### play

播放 Totalizer 中所有的动画描述。

### pause

暂停。

### reverse

逆转播放方向。

### loop

设置循环次数。

``` javascript
loop(0); //设置为：不循环
loop(5); //设置为：循环5次
loop();  //设置为：永久循环
```

### alternate
循环播放时，是否开启“往返”

``` javascript
alternate(false); //关闭往返
alternate(true);  //开启往返
alternate();      //开启往返
```

### process

接收一个0到1之间的数值，0代表动画开始时的位置，1代表动画结束时的位置，将动画设置为动画进程中的某个阶段。


``` javascript
process(0);
process(0.5);
process(1);
```
### reset
立即结束动画，并渲染动画开始时的画面。

### finish

立即结束动画，并渲染动画结束时的画面。

### clear

清空所有描述的动画