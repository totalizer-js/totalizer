/**
 * 解析属性，转换为统一动画变量
 */
import { isColor, color2rgba } from './color';

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
/**
 * tweens
 * @param {*} el 目标dom节点
 * @param {*} props 变化的属性值
 * {
 *  x: 10, // 目标值
 *  y: [100,200],// 初始值 - 目标值
 *  fill: '#ddd', // 目标颜色值
 *  cx: (process) => {return process * 25}, // 自定义目标值函数
 * }
 * @return [prop, type, from, to]
 */

const tweens = (el, props, transform) => Object.entries(props).map(([prop, value]) => {
  let original = '';
  let [type, from, to, fn] = ['', null, null, null];
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
    from = decompose(originalValue.toString());
    to = decompose(targetValue.toString());
  }

  return {
    prop, type, from, to, fn,
  };
});

export default tweens;
