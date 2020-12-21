<template>
  <section class="demo" id="content">
    <h2>Parallax</h2>
    <div class="top" id="a"></div>
    <div class="middle" id="b"></div>
    <div id="c"></div>
  </section>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {};
  },
  mounted() {
    const a = new Totalizer();
    a.add({
      el: document.getElementById('a'),
      props: {
        translateX: ['50px', '-50px'],
      },
    });
    const b = new Totalizer();
    b.add({
      el: document.getElementById('b'),
      props: {
        translateX: ['-50px', '50px'],
      },
    });
    const c = new Totalizer();
    c.add({
      el: document.getElementById('c'),
      props: {
        translateX: ['50px', '-50px'],
      },
    });
    const content = document.getElementById('content');
    content.addEventListener('mousemove', (e) => {
      const process = (e.clientX - content.offsetLeft) / content.offsetWidth;
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
div {
  width: 30px;
  height: 20px;
  margin: 0 auto 15px;
  background: #f60;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,.5);
}
div.top{
  margin-top:100px;
}
div.middle {
  background: #08c;
}
</style>>
