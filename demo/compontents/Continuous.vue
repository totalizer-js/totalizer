<template>
  <section class="demo">
    <h2>Continuous</h2>
    <div id="shadow"></div>
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
    const el = this.$refs.div;

    // 添加多个连续动画描述
    // 使用实例的只读属性 totalTime, 用来表示当前实例的总时长。
    t.add({
      el,
      props: {
        translateX: [0, 280],
      },
      duration: 500,
    });
    t.add({
      el,
      props: {
        translateY: [0, 150],
      },
      duration: 500,
      delay: t.totalTime,
      easing: 'easeOutBounce',
    });
    t.add({
      el,
      props: {
        translateX: [280, 0],
      },
      duration: 500,
      delay: t.totalTime,
    });
    t.add({
      el,
      props: {
        translateY: [150, 0],
      },
      duration: 500,
      delay: t.totalTime,
    });

    // 设置为循环播放
    t.loop().play();
  },
  methods: {},
};
</script>
<style scoped>
.demo {
  margin-top: 10px;
  position: relative;
  height: 300px;
  max-width: 400px;
  background: #f1f1f1;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
h2 {
  position: absolute;
  padding: 0;
  margin: 0;
  right: 15px;
  top: 0px;
  line-height: 40px;
  color: #08c;
  font-size: 16px;
  font-weight: normal;
  border: none;
  text-shadow: 1px 1px 0 #fff;
}

#shadow {
  position: absolute;
  top: 70px;
  left: 50px;
  width: 30px;
  height: 20px;
  background: #ddd;
  border-radius: 4px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,.5); */
}
#div {
  position: absolute;
  top: 70px;
  left: 50px;
  width: 30px;
  height: 20px;
  background: #08c;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>>
