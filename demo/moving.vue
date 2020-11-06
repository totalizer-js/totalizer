<template>
  <div id="page">
      <svg viewBox="0 0 300 300" width="300px" height="300px">
          <circle cx="0" cy="100" r="10" fill="#08c" ref="circle"/>
      </svg>
  </div>
</template>
<script>
import Animate from '../src/main';

export default {
  mounted() {
    const ani = new Animate(
      this.$refs.circle,
      {
        name: 'cx',
        value: 200,
      },
      {
        duration: 3000,
        easing: 'easeOutElastic',
      },

    );
    ani.play();
  },
};
</script>

<style>
svg {
    border: 1px solid #ddd;
}
</style>
