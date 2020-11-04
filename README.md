# beta 



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
        begin: (ani) => { 
            console.log(ani.status);
        },          // 开始触发事件
        complete: (ani) => {
            console.log(ani.status);
        }         // 结束触发事件
    }
)


// 目标，变化的属性，动画设置

move.play();
move.pause(); // 暂停
move.reverse(); // 改变方向
move.process();  // 0 ~ 100
move.complete();
move.distory();

```