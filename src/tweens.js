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
 * @return [prop, type, from, to]
 */

function getElementTransforms(el) {
  const str = el.style.transform || '';
  console.log(str);
  const reg = /(\w+)\(([^)]*)\)/g;
  const transforms = new Map();
  // eslint-disable-next-line no-cond-assign
  let m; while (m = reg.exec(str)) transforms.set(m[1], m[2]);
  console.log(transforms);
  return transforms;
}
const tweens = (el, props) => Object.entries(props).map(([prop, value]) => {
  let [type, original] = ['', ''];
  const transformProps = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

  if (transformProps.includes(prop)) {
    type = 'transform';
    const a = getElementTransforms(el).get(prop);
    console.log(a);
  } else if (el.getAttribute(prop) !== null) {
    type = 'attribute';
    original = el.getAttribute(prop);
  } else if (prop in el.style) {
    type = 'css';
    const uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    original = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || 0;
  }

  const [originalValue, targetValue] = Array.isArray(value) ? value : [original, value];
  const from = decompose(originalValue.toString());
  const to = decompose(targetValue.toString());

  return {
    prop, type, from, to,
  };
});

export default tweens;
