<template>
  <div class="page">
    <h2>基础</h2>
    <ul>
      <li><started /></li>
    </ul>
    <h2>动画描述</h2>
    <ul>
      <li><propertys /></li>
      <li><propertys-02 /></li>
    </ul>
    <h2>进阶</h2>
    <ul>
      <li><continuous /></li>
      <li><staggering /></li>
      <li><parallax /></li>
    </ul>
    <ul>
      <li><svg-drawing /></li>
      <li><svg-changing /></li>
      <li><svg-moving /></li>
    </ul>
  </div>
</template>
<script>
import Continuous from './compontents/Continuous.vue';
import Parallax from './compontents/Parallax.vue';
import Propertys from './compontents/Propertys.vue';
import Propertys02 from './compontents/Propertys02.vue';
import Staggering from './compontents/Staggering.vue';
import Started from './compontents/Started.vue';
import SvgChanging from './compontents/SvgChanging.vue';
import SvgDrawing from './compontents/SvgDrawing.vue';
import SvgMoving from './compontents/SvgMoving.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    Started,
    SvgChanging,
    SvgDrawing,
    SvgMoving,
    Continuous,
    Parallax,
    Staggering,
    Propertys,
    Propertys02,
  },
};
</script>

<style lang="css" scoped>
.page {
  padding: 20px 0 200px;

}
h2 {
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
}
ul {
  width: 1260px;
  margin: 0 auto;
  padding: 0;
  clear: both;
  list-style: none;
}
ul:after {
  display: table;
  content: "";
  clear: both;
}
li {
  padding: 0;
  margin: 0;
  width: 420px;
  float: left;
}
</style>
