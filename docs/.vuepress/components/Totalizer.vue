<template>
  <div class="wrapper" style="position: relative" ref="wrapper">
    <div class="boxer" ref="boxer">
      <div class="preloader">
        <div class="preloader__ring">
          <div class="preloader__sector">T</div>
          <div class="preloader__sector">o</div>
          <div class="preloader__sector">t</div>
          <div class="preloader__sector">a</div>
          <div class="preloader__sector">l</div>
          <div class="preloader__sector">i</div>
          <div class="preloader__sector">z</div>
          <div class="preloader__sector">e</div>
          <div class="preloader__sector">r</div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
        </div>
        <div class="preloader__ring">
          <div class="preloader__sector">T</div>
          <div class="preloader__sector">o</div>
          <div class="preloader__sector">t</div>
          <div class="preloader__sector">a</div>
          <div class="preloader__sector">l</div>
          <div class="preloader__sector">i</div>
          <div class="preloader__sector">z</div>
          <div class="preloader__sector">e</div>
          <div class="preloader__sector">r</div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
          <div class="preloader__sector"></div>
        </div>
      </div>
    </div>
    <div class="logo" ref="logo">
      <h1><span ref="letter">T</span>otalizer JS</h1>
      <p>JavaScript Animation Library</p>
    </div>

    <section ref="section">
      <svg viewBox="0 0 400 200" ref="eases" class="eases"></svg>

      <svg viewBox="0 0 1000 500" ref="timeline" class="timeline">
        <rect x="100" y="100" width="300" height="70" class="rect_bg" />
        <rect
          x="100"
          y="100"
          width="0"
          height="70"
          ref="rect1"
          class="rect_ac"
        />
        <text x="250" y="150" font-size="40" text-anchor="middle">
          Totalizer
        </text>

        <rect x="100" y="170" width="200" height="70" class="rect_delay" />
        <rect x="300" y="170" width="300" height="70" class="rect_bg" />
        <rect
          x="300"
          y="170"
          width="0"
          height="70"
          class="rect_ac"
          ref="rect2"
        />
        <text x="450" y="215" font-size="30" text-anchor="middle">1500</text>

        <rect x="100" y="240" width="400" height="70" class="rect_delay" />
        <rect x="500" y="240" width="200" height="70" class="rect_bg" />
        <rect
          x="500"
          y="240"
          width="0"
          height="70"
          class="rect_ac"
          ref="rect3"
        />
        <text x="600" y="285" font-size="30" text-anchor="middle">1000</text>

        <rect x="100" y="310" width="600" height="70" class="rect_delay" />
        <rect x="700" y="310" width="200" height="70" class="rect_bg" />
        <rect
          x="700"
          y="310"
          width="0"
          height="70"
          class="rect_ac"
          ref="rect4"
        />
        <text x="800" y="355" font-size="30" text-anchor="middle">1000</text>

        <line x1="50" y1="100" x2="950" y2="100" stroke-dasharray="5" />
        <line x1="50" y1="170" x2="950" y2="170" stroke-dasharray="5" />
        <line x1="50" y1="240" x2="950" y2="240" stroke-dasharray="5" />
        <line x1="50" y1="310" x2="950" y2="310" stroke-dasharray="5" />
        <line x1="50" y1="380" x2="950" y2="380" stroke-dasharray="5" />

        <line x1="100" y1="50" x2="100" y2="430" stroke-dasharray="5" />
        <line x1="900" y1="50" x2="900" y2="430" stroke-dasharray="5" />

        <line x1="100" y1="50" x2="100" y2="430" ref="line" class="move" />
      </svg>
    </section>
  </div>
</template>

<script>
import Totalizer from "../../../src/Totalizer";

export default {
  mounted() {
    this.logo();
    this.eases();
    this.line();
  },
  methods: {
    logo() {
      // const letter = new Totalizer();
      // letter.add({
      //   el: this.$refs.letter,
      //   props: {
      //     translateY: ["50px", "0px"],
      //   },
      //   delay:100,
      //   endDelay:100,
      //   duration:2000,
      // });
      // letter.loop().alternate().play();



      const boxer = new Totalizer();
      boxer.add({
        el: this.$refs.boxer,
        props: {
          translateX: ["50px", "-50px"],
        },
      });
      const logo = new Totalizer();
      logo.add({
        el: this.$refs.logo,
        props: {
          translateX: ["-50px", "50px"],
        },
      });
      const section = new Totalizer();
      section.add({
        el: this.$refs.section,
        props: {
          translateX: ["50px", "-50px"],
        },
      });

      // ani.loop().alternate().play();

      window.addEventListener("mousemove", (e) => {
        const process = e.clientX / document.body.clientWidth;
        boxer.process(process);
        logo.process(process);
        section.process(process);
        // console.log(e.clientX,e.clientY,document.body.clientWidth);
      });
    },

    eases() {
      [
        "linear",
        "easeOutSine",
        "easeOutQuad",
        "easeOutCubic",
        // "easeOutQuart",
        // "easeOutQuint",
        // "easeOutExpo",
        "easeOutCirc",
        "easeOutBounce",
        "easeOutBack",
        "easeOutElastic",
      ].forEach((ease, i) => {
        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("x", 120);
        rect.setAttribute("y", (i + 1) * 16 + 15);
        rect.setAttribute("width", 20);
        rect.setAttribute("height", 10);
        rect.setAttribute("rx", 2);
        rect.setAttribute("fill", "rgba(0,220,255,1)");
        const text = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        text.setAttribute("x", 20);
        text.setAttribute("y", (i + 1) * 16 + 24);
        text.setAttribute("class", "text");
        text.innerHTML = ease;
        text.setAttribute(
          "style",
          'font-size:12px;line-height:20px;  font-family:"Times New Roman",Georgia,Serif;'
        );
        text.setAttribute("fill", "#aaa");

        const ani = new Totalizer({
          el: rect,
          props: {
            x: "320",
          },
          duration: 2000,
          easing: ease,
        });
        ani.loop().alternate().play();
        this.$refs.eases.appendChild(text);
        this.$refs.eases.appendChild(rect);
      });
    },

    line() {
      const ani = new Totalizer();
      ani.add({
        el: this.$refs.line,
        props: {
          x1: [100, 900],
          x2: [100, 900],
        },
        duration: 4000,
      });

      ani.add({
        el: this.$refs.rect1,
        props: {
          width: 300,
        },
        duration: 1500,
      });

      ani.add({
        el: this.$refs.rect2,
        props: {
          width: 300,
        },
        delay: 1000,
        duration: 1500,
      });

      ani.add({
        el: this.$refs.rect3,
        props: {
          width: 200,
        },
        delay: 2000,
        duration: 1000,
      });

      ani.add({
        el: this.$refs.rect4,
        props: {
          width: 200,
        },
        delay: 3000,
        duration: 1000,
      });

      ani.loop().alternate().play();
    },
  },
};
</script>

<style scoped lang="stylus">
.wrapper {
  padding-bottom: 20px;
  // border: 1px solid red;
}

section {
  display: flex;
  box-sizing: border-box;
}

.boxer {
  height: 250px;
}

.logo {
  padding-bottom: 40px;
  text-align: center;

  h1 {
    padding: 0;
    margin: 0;
    font-size: 45px;
  }

  p {
    padding: 0;
    margin: 0;
  }
}

svg.eases, svg.timeline {
  width: 50%;
  display: block;
  box-sizing: border-box;
}

svg.eases {
}

svg.timeline {
  line {
    stroke: #333;
    stroke-width: 1;
  }

  line.move {
    stroke-width: 4;
    stroke: rgba(0, 220, 255, 1);
  }

  text {
    fill: #999;
  }

  .rect_delay {
    fill: #f7f7f7;
  }

  .rect_bg {
    fill: #e1e1e1;
  }

  .rect_ac {
    // fill: rgba(0,220,255,1);
    fill: rgba(0, 0, 0, 0.05);
  }
}

.preloader {
  display: flex;
  color: rgba(0, 220, 255, 1);
  animation: tiltSpin 10s linear infinite;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 17em;
  height: 17em;
}

.preloader, .preloader__ring {
  transform-style: preserve-3d;
}

.preloader__ring {
  animation-name: spin;
  animation-duration: 4s;
  animation-timing-function: inherit;
  animation-iteration-count: inherit;
  font-size: 2em;
  position: relative;
  height: 3rem;
  width: 1.5rem;
}

.preloader__sector {
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  transform: translateZ(7rem);
}

.preloader__sector, .preloader__sector:empty:before {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.preloader__sector:empty:before {
  background: linear-gradient(transparent 45%, currentColor 45% 55%, transparent 55%);
  content: '';
}

.preloader__sector:nth-child(2) {
  transform: rotateY(12deg) translateZ(7rem);
}

.preloader__sector:nth-child(3) {
  transform: rotateY(24deg) translateZ(7rem);
}

.preloader__sector:nth-child(4) {
  transform: rotateY(36deg) translateZ(7rem);
}

.preloader__sector:nth-child(5) {
  transform: rotateY(48deg) translateZ(7rem);
}

.preloader__sector:nth-child(6) {
  transform: rotateY(60deg) translateZ(7rem);
}

.preloader__sector:nth-child(7) {
  transform: rotateY(72deg) translateZ(7rem);
}

.preloader__sector:nth-child(8) {
  transform: rotateY(84deg) translateZ(7rem);
}

.preloader__sector:nth-child(9) {
  transform: rotateY(96deg) translateZ(7rem);
}

.preloader__sector:nth-child(10) {
  transform: rotateY(108deg) translateZ(7rem);
}

.preloader__sector:nth-child(11) {
  transform: rotateY(120deg) translateZ(7rem);
}

.preloader__sector:nth-child(12) {
  transform: rotateY(132deg) translateZ(7rem);
}

.preloader__sector:nth-child(13) {
  transform: rotateY(144deg) translateZ(7rem);
}

.preloader__sector:nth-child(14) {
  transform: rotateY(156deg) translateZ(7rem);
}

.preloader__sector:nth-child(15) {
  transform: rotateY(168deg) translateZ(7rem);
}

.preloader__sector:nth-child(16) {
  transform: rotateY(180deg) translateZ(7rem);
}

.preloader__sector:nth-child(17) {
  transform: rotateY(192deg) translateZ(7rem);
}

.preloader__sector:nth-child(18) {
  transform: rotateY(204deg) translateZ(7rem);
}

.preloader__sector:nth-child(19) {
  transform: rotateY(216deg) translateZ(7rem);
}

.preloader__sector:nth-child(20) {
  transform: rotateY(228deg) translateZ(7rem);
}

.preloader__sector:nth-child(21) {
  transform: rotateY(240deg) translateZ(7rem);
}

.preloader__sector:nth-child(22) {
  transform: rotateY(252deg) translateZ(7rem);
}

.preloader__sector:nth-child(23) {
  transform: rotateY(264deg) translateZ(7rem);
}

.preloader__sector:nth-child(24) {
  transform: rotateY(276deg) translateZ(7rem);
}

.preloader__sector:nth-child(25) {
  transform: rotateY(288deg) translateZ(7rem);
}

.preloader__sector:nth-child(26) {
  transform: rotateY(300deg) translateZ(7rem);
}

.preloader__sector:nth-child(27) {
  transform: rotateY(312deg) translateZ(7rem);
}

.preloader__sector:nth-child(28) {
  transform: rotateY(324deg) translateZ(7rem);
}

.preloader__sector:nth-child(29) {
  transform: rotateY(336deg) translateZ(7rem);
}

.preloader__sector:nth-child(30) {
  transform: rotateY(348deg) translateZ(7rem);
}

/* Animations */
@keyframes tiltSpin {
  from {
    transform: rotateY(0) rotateX(30deg);
  }

  to {
    transform: rotateY(360deg) rotateX(30deg);
  }
}

@keyframes spin {
  from {
    transform: rotateY(0);
  }

  to {
    transform: rotateY(1turn);
  }
}
</style>
