<template>
  <section class="demo">
    <h2>Staggering</h2>
    <ul id="ul" ref="ul">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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

    // 添加多个动画描述
    const els = this.$refs.ul.querySelectorAll('li');
    els.forEach((el, i) => {
      t.add({
        el,
        props: {
          scale: [0.5, 1],
          rotate: [0, 360],
          background: ['#ddd', '#08c'],
        },
        duration: 500,
        delay: (parseInt(i / 5, 10) + (i % 5)) * 214,
      });
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

ul {
  position: absolute;
  top: 90px;
  left: 95px;
  width: 250px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap:  wrap;
  list-style: none;
}
li {
  width: 30px;
  height: 20px;
  margin: 0 15px 15px 0;
  background: #08c;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,.5);
}
</style>>
