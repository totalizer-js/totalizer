/**
 * default easing function
 * reference:
 * https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
 *
 * usage:
 * eases[easeName](easeArgument)(ratio)
 *
 * eg. eases['easeOutElastic'](1,0.5)(0.5) === 0.96875
 */
const eases = { linear: () => (t) => t };

const fns = {
  Sine: () => (t) => 1 - Math.cos((t * Math.PI) / 2),
  Circ: () => (t) => 1 - Math.sqrt(1 - t * t),
  Back: () => (t) => t * t * (3 * t - 2),
  Bounce: () => (t) => {
    let b = 4;
    let p = 2 ** b;
    while (t < (p - 1) / 11) { b -= 1; p = 2 ** b; }
    return 1 / (4 ** (3 - b)) - 7.5625 * (((p * 3 - 2) / 22 - t) ** 2);
  },
  Elastic: (amplitude = 1, period = 0.5) => {
    const a = Math.min(Math.max(amplitude, 1), 10);
    const p = Math.min(Math.max(period, 0.1), 2);
    return (t) => ((t === 0 || t === 1) ? t : -a * (2 ** (10 * (t - 1))) * Math.sin((((t - 1) - ((p / (Math.PI * 2)) * Math.asin(1 / a))) * (Math.PI * 2)) / p));
  },
};
['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach((name, i) => {
  fns[name] = () => (t) => t ** (i + 2);
});

Object.keys(fns).forEach((name) => {
  const easeIn = fns[name];
  eases[`easeIn${name}`] = easeIn;
  eases[`easeOut${name}`] = (a, b) => (t) => 1 - easeIn(a, b)(1 - t);
  eases[`easeInOut${name}`] = (a, b) => (t) => (t < 0.5 ? easeIn(a, b)(t * 2) / 2
    : 1 - easeIn(a, b)(t * -2 + 2) / 2);
});

export default eases;
