<template>
  <section class="demo" id="content">
    <div id="a"></div>
    <div id="b"></div>
    <div id="c"></div>
  </section>
</template>
<script>
import Totalizer from "../../../src/Totalizer";

export default {
  data() {
    return {};
  },
  mounted() {
    const a = new Totalizer();
    a.add({
      el: document.getElementById('a'),
      props: {
        translateX: ["50px", "-50px"],
      },
    });
    const b = new Totalizer();
    b.add({
      el: document.getElementById('b'),
      props: {
        translateX: ["-50px", "50px"],
      },
    });
    const c = new Totalizer();
    c.add({
      el: document.getElementById('c'),
      props: {
        translateX: ["50px", "-50px"],
      },
    });
    const content = document.getElementById('content');
    content.addEventListener("mousemove", (e) => {
      const process = (e.clientX - content.offsetLeft)/ content.offsetWidth;
      a.process(process);
      b.process(process);
      c.process(process);
    });
  },
  methods: {},
};
</script>
<style scoped>
.demo {
  position: relative;
  height: 100px;
  width: 100%;
  padding: 20px 0;
  background: #333;
  border-radius: 5px;
  /* border: 2px solid #ddd; */
}
div {
  /* position: absolute;
  top: 25px;
  left: 50px; */
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background: #f8c555;
  border-radius: 50%;
}
div:nth-child(2) {
  background: #fff;
}
</style>>

