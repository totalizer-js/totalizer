const transformProps = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

/**
 * 获取单位
 * @param {*} val
 */
// function getUnit(val) {
//   const split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
//   return split ? (split[1] || '') : '';
// }

const tweens = (el, props) => Object.entries(props).map(([prop, value]) => {
  // const unit = getUnit(value);

  let type = 'object';
  let originalValue = 0;
  if (transformProps.includes(prop)) {
    type = 'transform';
  } else if (el.getAttribute(prop) !== null) {
    type = 'attribute';
    originalValue = el.getAttribute(prop);
  } else if (prop in el.style) {
    type = 'css';
    const uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    originalValue = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || 0;
  }

  const [from, to] = Array.isArray(value) ? value : [originalValue, value];

  return {
    prop, type, from: parseFloat(from), to: parseFloat(to),
  };
});

export default tweens;
