<template>
  <section class="demo">
    <h2>Sample Animation</h2>
    <div ref="div" id="div"></div>
  </section>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {};
  },
  mounted() {
    // 创建一个动画迭代器
    const t = new Totalizer();

    // 添加一个动画描述
    t.add({
      el: this.$refs.div, // 动画节点
      props: {
        translateX: [0, 300], // 偏移量从 0px 变为 200px
        scale: [0.4, 1], // 缩放 0.4倍 变为 1倍
        rotate: [0, 720], // 旋转 0deg 变为 720deg
        background: ['#ddd', '#08c'], // 背景色从 #ddd 变为 #08c
      },
      delay: 300, // 播放延时
      endDelay: 300, // 结束延时
      duration: 2000, // 动画持续时长
      easing: 'easeOutBounce', // 动画缓动效果
    });

    // 设置为循环，往返，并开始播放
    t.loop().alternate().play();
  },
  methods: {},
};
</script>
<style scoped>
.demo {
  margin-top:10px;
  position: relative;
  height: 300px;
  max-width: 400px;
  background: #f1f1f1;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.5);
}
h2 {
  position:absolute;
  padding:0;
  margin:0;
  right:15px;
  top:0px;
  line-height:40px;
  color:#08c;
  font-size:16px;
  font-weight: normal;
  border:none;
  text-shadow: 1px 1px 0 #fff;
}
#div {
  position: absolute;
  top: 50%;
  left: 25px;
  width: 60px;
  height: 40px;
  margin-top:-20px;
  background: #f8c555;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,.5);
}
</style>>
