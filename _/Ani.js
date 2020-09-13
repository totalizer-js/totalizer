const instances = [];
let raf;
const step = () => {
  if (instances.length) {
    instances[0].play();
    raf = requestAnimationFrame(step);
  } else {
    raf = cancelAnimationFrame(raf);
  }
};

const a = {
  play() { console.log('a'); },
};

instances.push(a);

raf = requestAnimationFrame(step);

setTimeout(() => {
  instances.pop();
}, 1000);

class Ani {
  constructor(path, opts = {}) {
    this.path = path;

    this.dur = opts.dur || 3;

    this.svg = this.path.parentNode;
    this.init();
  }

  init() {
    const len = this.path.getTotalLength();
    this.path.setAttribute('stroke-dasharray', len);
    this.path.setAttribute('stroke-dashoffset', len);

    // this.animate = document.createElement('animate');
    // this.animate.setAttribute('attributeName', 'stroke-dashoffset');
    // this.animate.setAttribute('from', len);
    // this.animate.setAttribute('to', 0);
    // this.animate.setAttribute('fill', 'freeze');
    // this.path.appendChild(this.animate);

    this.path.innerHTML = `<animate 
    attributeName="stroke-dashoffset" />`;
    // eslint-disable-next-line prefer-destructuring
    this.animate = this.path.childNodes[0];
    this.animate.setAttribute('from', len);
    this.animate.setAttribute('to', 0);
    this.animate.setAttribute('fill', 'freeze');
  }

  play() {
    const cur = this.svg.getCurrentTime();
    this.animate.setAttribute('begin', `${cur}s`);
    this.animate.setAttribute('dur', `${cur + 3}s`);
    // this.path.getBoundingClientRect();
    // this.svg.setCurrentTime(0);
  }
}

export default Ani;
