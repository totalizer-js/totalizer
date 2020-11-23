/**
 * 解析属性，转换为统一动画变量
 */
import { isColor, color2rgba } from './color';

const decompose = (str) => {
  let numbers;
  let strings;
  if (isColor(str)) {
    [numbers, strings] = [
      color2rgba(str),
      ['rgba(', ',', ',', ',', ')'],
    ];
  } else {
    const val = /^([\d.]+)([a-z%]*)$/i.exec(str);
    numbers = [parseFloat(val[1])];
    strings = ['', val[2]];
  }
  return {
    original: str,
    numbers,
    strings,
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
export const tweensDecompose = (el, props) => Object.entries(props).map(([prop, value]) => {
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
  const from = decompose(originalValue);
  const to = decompose(targetValue);

  return {
    prop, type, from, to,
  };
});

export const tweensRender = (el, tweens, ratio) => {
  tweens.forEach((tween) => {
    let from;
    let to;
    let now;
    let str = tween.to.strings[0];
    for (let i = 0; i < tween.to.numbers.length; i += 1) {
      from = tween.from.numbers[i];
      to = tween.to.numbers[i];
      now = from + (to - from) * ratio;
      str += now + tween.to.strings[i + 1];
    }
    if (tween.type === 'attribute') {
      el.setAttribute(tween.prop, str);
    } else {
      // eslint-disable-next-line no-param-reassign
      el.style[tween.prop] = str;
    }
  });
};
