const render = (el, tweens, ratio) => {
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

export default render;
