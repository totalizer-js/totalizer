<template>
  <section class="demo">
    <ul id="ul">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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

    // 添加多个动画描述
    const els = document.querySelectorAll("#ul li");
    els.forEach((el, i) => {
      animation.add({
        el: el,
        props: {
          scale: [0.1, 1],
          background: ["#f8c555", "#fff"],
        },
        duration: 500,
        delay: i * 200,
      });
    });

    // 设置为循环，往返，并开始播放
    animation.loop().alternate().play();
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
ul {
  position: absolute;
  top: 25px;
  left: 25px;
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  float: left;
  padding: 0;
  margin: 0;
  margin-right: 5px;
  width: 50px;
  height: 50px;
  background: #f8c555;
  border-radius: 20%;
}
</style>>

