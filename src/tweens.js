/**
 * 解析属性，转换为统一动画变量
 */
import { isColor, color2rgba } from './color';
import getElementTransform from './transform';

const decompose = (str) => {
  if (isColor(str)) {
    return {
      numbers: color2rgba(str),
      strings: ['rgba(', ',', ',', ',', ')'],
    };
  }
  const rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
  return {
    numbers: str.match(rgx) ? str.match(rgx).map(Number) : [0],
    strings: str.split(rgx),
  };
};

const tweens = (opts) => Object.entries(opts.props).map(([prop, value]) => {
  const {
    el, delay, endDelay, duration, easing,
  } = opts;
  let [originalFrom, originalTo] = ['', ''];
  let [type, from, to, fn, str] = ['', null, null, null, null];
  const transform = getElementTransform(el);

  /**
   * type: transform attribute css
   */
  const transformProps = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];
  if (transformProps.includes(prop)) {
    type = 'transform';
    originalFrom = transform.get(prop) || (prop.includes('scale') ? 1 : 0);
  } else if (el.getAttribute(prop) !== null) {
    type = 'attribute';
    originalFrom = el.getAttribute(prop);
  } else if (prop in el.style) {
    type = 'css';
    const uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    originalFrom = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || 0;
  }

  /**
   * decompose value
   */
  [originalFrom, originalTo] = Array.isArray(value) ? value : [originalFrom, value];
  if (typeof value === 'function') {
    fn = value;
  } else {
    const decFrom = decompose(originalFrom.toString());
    const decTo = decompose(originalTo.toString());
    [from, to] = [decFrom.numbers, decTo.numbers];
    str = decTo.strings.length ? decTo.strings : decFrom.strings;
    /**
     * default unit
     */
    const px = ['translate', 'padding', 'margin', 'width', 'height', 'left', 'top', 'right', 'bottom', 'fontSize'];
    const deg = ['rotate', 'skew'];
    if (!str[1]) {
      if (px.some((s) => prop.includes(s))) str[1] = 'px';
      if (deg.some((s) => prop.includes(s))) str[1] = 'deg';
    }
  }

  return {
    el,
    delay,
    endDelay,
    duration,
    easing,
    prop,
    type,
    from,
    to,
    str,
    fn,
  };
});

export default tweens;
