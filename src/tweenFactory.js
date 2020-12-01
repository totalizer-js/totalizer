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
  let original = '';
  let [type, from, to, fn, str] = ['', null, null, null, null];
  const transform = getElementTransform(el);
  /**
   * 分析属性类型
   */
  const transformProps = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];
  if (transformProps.includes(prop)) {
    type = 'transform';
    original = transform.get(prop) || (prop.includes('scale') ? 1 : 0);
  } else if (el.getAttribute(prop) !== null) {
    type = 'attribute';
    original = el.getAttribute(prop);
  } else if (prop in el.style) {
    type = 'css';
    const uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    original = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || 0;
  }
  /**
   * 分析值类型
   */
  const [originalValue, targetValue] = Array.isArray(value) ? value : [original, value];
  if (typeof value === 'function') {
    fn = value;
  } else {
    const oFrom = decompose(originalValue.toString());
    const oTo = decompose(targetValue.toString());
    from = oFrom.numbers;
    to = oTo.numbers;
    str = oTo.strings.length ? oTo.strings : oFrom.strings;
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
