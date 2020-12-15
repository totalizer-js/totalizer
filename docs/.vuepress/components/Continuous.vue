<template>
  <section class="demo">
      <div id="shadow"></div>
    <div id="div"></div>
  </section>
</template>
<script>
import Totalizer from "../../../src/Totalizer";

export default {
  data() {
    return {};
  },
  mounted() {
    // 创建一个动画迭代器
    const animation = new Totalizer();
    const el = document.getElementById("div");

    // 添加多个连续动画描述
    // 使用实例的只读属性 animation.druation, 用来表示当前实例的总时长。
    animation.add({
      el,
      props: {
        translateX: [0, 100],
      },
      duration: 1000,
    });
    animation.add({
      el,
      props: {
        translateY: [0, 50],
      },
      duration: 500,
      delay: animation.totalTime,
      easing: 'easeOutBounce'
    });
    animation.add({
      el,
      props: {
        translateX: [100, 0],
      },
      duration: 1000,
      delay: animation.totalTime
    });
    animation.add({
      el,
      props: {
        translateY: [50, 0],
      },
      duration: 500,
      delay: animation.totalTime
    });

    // 设置为循环播放
    animation.loop().play();
  },
  methods: {},
};
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
#shadow {
    position: absolute;
  top: 15px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: #666;
  border-radius: 50%;
}
#div {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
}
</style>>

