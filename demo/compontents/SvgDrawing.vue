<template>
  <section class="demo">
    <h2>SVG Path Drawing</h2>
    <svg viewBox="0 0 1024 1024">
      <path
        ref="path"
        fill="none"
        stroke="#08c"
        stroke-width="8"
        d="M710.684108 957.190385c-1.619894 0-3.248997-0.191358-4.860704-0.582261-7.05058-1.714038-12.676717-7.013741-14.806217-13.947663L574.782905 564.385091 435.985746 682.001859l1.680269 204.552769c0.044002 5.451152-2.076288 10.69969-5.898337 14.58723l-34.361599 34.976606c-4.898567 4.986571-11.995195 7.14677-18.839067 5.730515-6.845918-1.414209-12.504802-6.206352-15.027252-12.726859l-74.372871-192.261838-199.609177-85.742826c-6.227842-2.675946-10.738575-8.245801-12.059664-14.894222-1.321088-6.64842 0.716314-13.519921 5.448082-18.374486l34.223452-35.101449c4.117784-4.221138 9.865695-6.465249 15.738449-6.186909l209.368448 10.253528 117.92376-144.683217L79.288834 321.166697c-6.809079-2.164293-12.009522-7.703449-13.735839-14.635325-1.728364-6.931876 0.264013-14.263865 5.26184-19.36914l65.386196-66.780963c4.374634-4.466732 10.543124-6.696516 16.762779-6.078439l469.724151 47.295166 133.106554-133.416616c53.017494-53.638641 103.833857-62.058404 129.411395-62.058404 0.12689 0 0.252757 0 0.379647 0 23.74275 0 44.731784 7.024997 56.20407 18.49626 27.703969 27.702945 26.328645 106.726743-48.302099 182.862771-0.052189 0.054235-0.104377 0.155543-0.158612 0.207731L759.046582 401.75513l37.570687 466.417849c0.477884 5.939269-1.641383 11.800767-5.810333 16.055674l-65.425082 66.781986C721.463616 955.008696 716.145493 957.190385 710.684108 957.190385z
        "
      ></path>
    </svg>
  </section>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {};
  },
  mounted() {
    const el = this.$refs.path;
    const totalLen = el.getTotalLength();
    el.setAttribute('stroke-dasharray', totalLen);
    const t = new Totalizer();
    t.add({
      el,
      props: {
        strokeDashoffset: [totalLen, 0],
      },
      duration: 1600,
      delay: 200,
      endDelay: 200,
    });
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
svg {
  padding-top: 40px;
  display: block;
  margin: 0 auto;
  max-width: 60%;
}
</style>>
