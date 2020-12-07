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
        translateX: ["0px", "100px"],
      },
      duration: 1000,
    });
    animation.add({
      el,
      props: {
        translateY: ["0px", "50px"],
      },
      duration: 500,
      delay: animation.duration,
      easing: 'easeOutBounce'
    });
    animation.add({
      el,
      props: {
        translateX: ["100px", "0px"],
      },
      duration: 1000,
      delay: animation.duration
    });
    animation.add({
      el,
      props: {
        translateY: ["50px", "0px"],
      },
      duration: 500,
      delay: animation.duration
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

