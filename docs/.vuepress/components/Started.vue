<template>
  <section class="demo">
    <div id="div"></div>
  </section>
</template>
<script>
import Tolalizer from '../../../src/Totalizer';

export default {
    data(){
        return {}
    },
    mounted(){

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
    },
    methods:{}
}
</script>
<style scoped>
.demo {
  position: relative;
  height: 100px;
  width: 100%;
  background: #333;
  border-radius: 5px;
  /* border: 2px solid #ddd; */
}
#div {
  position: absolute;
  top: 25px;
  left: 50px;
  width: 50px;
  height: 50px;
  background: #08c;
  border-radius: 50%;
}
</style>>

