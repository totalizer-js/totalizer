<template>
  <div class="player">
    <section class="demo" ref="demo">
      <h2 ref="h2">Controll</h2>
      <div ref="div" id="div"></div>
    </section>
    <section class="timeline">
      <svg viewBox="0 0 1000 250">
        <rect x="100" y="110" rx="0" width="800" height="10" fill="#ddd" />
        <rect x="300" y="110" rx="0" width="400" height="10" fill="#000" />

        <rect
          x="300"
          y="110"
          rx="0"
          width="0"
          height="10"
          fill="#08c"
          ref="rect"
        />

        <text x="200" y="165" font-size="25" fill="#333">delay</text>
        <text x="500" y="165" font-size="25" fill="#333">duration</text>
        <text x="800" y="165" font-size="25" fill="#333">endDelay</text>

        <line
          x1="100"
          y1="70"
          x2="100"
          y2="160"
          stroke="#08c"
          stroke-width="4"
          ref="line"
        />
      </svg>
    </section>
    <section class="controll">
      <a href="javascript:void(0)" v-if="isPlaying" @click="t.pause()">
        <i class="iconfont icon-pause"></i>
        Pause</a
      >
      <a href="javascript:void(0)" v-else @click="t.play()">
        <i class="iconfont icon-play"></i>
        play</a
      >

      <a href="javascript:void(0)" @click="t.reset()">reset</a>
      <div class="controll-status">
        <a href="javascript:void(0)" @click="t.reverse()">
          <i class="iconfont icon-right active" v-if="!isReverse"></i>
          <i class="iconfont icon-left active" v-else></i>
          reverse
        </a>
        <a href="javascript:void(0)" @click="!!loopTimes ? t.once() : t.loop()">
          <i class="iconfont icon-loop" :class="{ active: !!loopTimes }"></i>
          {{ !!loopTimes ? "once" : "loop" }}
        </a>
        <a href="javascript:void(0)" @click="t.alternate()">
          <i
            class="iconfont icon-alternate"
            :class="{ active: isAlternate }"
          ></i>
          alternate
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import Totalizer from '../../src/Totalizer';

export default {
  data() {
    return {
      t: null,
      isReverse: false,
      isPlaying: false,
      loopTimes: 0,
      isAlternate: false,
    };
  },
  mounted() {
    const t = new Totalizer();

    t.add({
      el: this.$refs.div,
      props: {
        translateX: [0, 300],
        scale: [0.4, 1],
        rotate: [0, 720],
        background: ['#ddd', '#08c'],
      },
      delay: 500,
      endDelay: 500,
      duration: 1000,
      //   easing: 'easeOutBounce',
    });

    t.add({
      el: this.$refs.line,
      props: {
        x1: [100, 900],
        x2: [100, 900],
      },
      duration: 2000,
    });

    t.add({
      el: this.$refs.rect,
      props: {
        width: [0, 400],
      },
      delay: 500,
      duration: 1000,
    });

    t.reset();

    Object.defineProperty(t, 'isPlaying', {
      get: () => this.isPlaying,
      set: (value) => {
        this.isPlaying = value;
      },
    });
    Object.defineProperty(t, 'isReverse', {
      get: () => this.isReverse,
      set: (value) => {
        this.isReverse = value;
      },
    });
    Object.defineProperty(t, 'loopTimes', {
      get: () => this.loopTimes,
      set: (value) => {
        this.loopTimes = value;
      },
    });
    Object.defineProperty(t, 'isAlternate', {
      get: () => this.isAlternate,
      set: (value) => {
        this.isAlternate = value;
      },
    });

    this.t = t;
  },
  methods: {},
};
</script>
<style scoped>
.player {
  position: relative;
}
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
#div {
  position: absolute;
  top: 50%;
  left: 25px;
  width: 60px;
  height: 40px;
  margin-top: -20px;
  background: #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.timeline {
  position: absolute;
  top: 210px;
  left: 0;
  width: 400px;
}
.controll {
  margin-top: 10px;
  padding: 26px 10px 0 10px;
  box-sizing: border-box;
  position: relative;
  height: 70px;
  max-width: 400px;
  background: #f1f1f1;
  border-radius: 10px;
  border: 2px solid #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
.controll-status {
  float: right;
}
.controll a {
  position: relative;
  display: block;
  float: left;
  margin-right: 5px;
  height: 35px;
  width: 65px;
  text-align: center;
  line-height: 35px;
  font-size: 12px;
  color: #333;
  text-decoration: none;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: all ease-out 0.3s;
}
.controll a:hover {
  text-decoration: none;
}
.controll-status a {
  background: #fff;
}
/* .controll > a:nth-child(1) {
  background:#08c;
  color:#fff;
} */
.controll a:last-child {
  margin: 0;
}
.controll a:active {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5) inset;
}
.controll i {
  position: absolute;
  display: block;
  bottom: 100%;
  left: 50%;
  color: #999;
  line-height: 25px;
  transform: translateX(-50%);
}

.controll i.active {
  color: #08c;
}

@font-face {
  font-family: "iconfont";
  src: url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATUAAsAAAAACbQAAASHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDTgqGHIUZATYCJAMcCxAABCAFhG0HWBtZCBEVpK+Q/RxwN5dRS1g2Unq2Vj9cNKf1cjSSkZSZmTse3vbrPXdmHmQ+kfplReQA45GEYRSOQMmqlU1d41Gxrd+j9z5ns3m47AmoD0IFbVonrU/UZ2X4fnO1wAfkOOpkSa498ugLPy1nXiZLMJEjPlPzg3qiHRxL/rIokDz7b5espEh9ex7QgLqxCnRWIPOJ4h7hdTWpG9304tUEqiUcof0hUUkgV9BOgbiwdPFckDesygQp9IZ24MgC8QwafTrMnAHwNPv5+AfuIQdJk4GudWBR8ALwe8Y8c8f0P3UGU3iynxv6cWSsBQpxa9B7BXCRXQur7vqs/QCqXpL2aueeGT9z/x8VQgHppryhdFWNyn/wKBqtkGSiBdKOIuZEruXnJGJR+Llm0fBzI53WPYNZgC4GjTW6BLpk0CWRcWDNf2IbEHYrfUjeIq23tQhgVR9AGW9PShW0U9L5GlEr+dq1lCtXkq5eTRave2a0VeVq9l7huqTr1ye/2+QMsYpO53vI3LYOxJeggp6LV72T+yZW5Z2ZkNTZboLM+XJunlBeno1Q9nbayc0RWvVoIRQPbT+vOv+y5+TJPW1g+fsyMl8sK8uC+4vShUpwJLWSVmmRjBo0OTkJ8dWcYry2oLkglWotTBNrECJiPb5am0utBMcmA0+tBH9I1Fmckb2c5SSTudJeXTarz4pUDBhIsvvndu+ZCNVIklOjtTaNaq5Jnc0u9jSrO5l6xuLMqVe95pnmZ+ITuE3F2RuZ7UxpJd4pRYmoOItTgn7YSy2v+FsfvkkF+OoNXIQiFGF7Gr4wpJoaEHhm1UcE5w8OeU7haM45Q01bTTy/KT6gOTn4pMIN0rDr88DrHjtOrv/GYBFSGt11S3esAmy/Gu5wzCkcbL4RLR0ty/nPff4+J3R3gn8+9bprNV5H4Y3+YqQ0svrXAvhcIxhnGXmorD7IPDA3Nn9Q89lcBfY00j6+yh7KG9aoeBhlYZxtGFdWG45RXnNIhZGt/uGu4qveTMX9wfo1SkEGVSybReDxbqAe+9JCDw7qlsJs4QKfgT3gwaWa8iB6+B1+rvoZ987Xrkz4b2sXUDQPmP8K5RMzivx4zaH4c74HIO9mBgGG5RRL/mm/4+Z8DOdVvL7Kz1iALxuLZIgOZWGdv5feUp3/lYw5VTwF2briDI56BDp7a5+RUFX8o4LT7u2nn2PXE3pzFSSdRch6qxAFsxYaI7ZCq7cLqjVCjx8xYx1gURSA1fYLCJMaIBk3gGzSWUTB3IXGvLfQmgwMleo/7s545jXqzZsiNRSUnajOZeDQYZu88Rvlrku1rsio/1BfJygOonbhCwN0j338vkzMmFilp09xPXSdkFNpkFtQmbltGPLQEwW59KONNwpSBgokc0JqOTHgZLnZdL7/G5R2Oimd6OsK/wPl1asnsUDEQHxpB1bfS1nf2ysljGFlO6ZEj3yCGzqZFcQNb9aAnAlUK9LOVojzmKsNTq/v3+cVUNFDdZEiR4km2uiiN7sg4uZal5XNOrCt086gw3PYeO7SncfMdelpNAIA")
    format("woff2");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-loop:before {
  content: "\e61e";
}

.icon-right:before {
  content: "\e631";
}

.icon-left:before {
  content: "\e632";
}

.icon-alternate:before {
  content: "\e602";
}

.icon-pause:before {
  content: "\e609";
}

.icon-play:before {
  content: "\e60a";
}
</style>>
