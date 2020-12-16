/**
 * compare frame priority
 * @param {*} old
 * @param {*} current
 */
export const compareLevel = (a, b) => {
  if (a[0] > 0 || a[0] > b[0]) return true;
  if (a[0] === b[0] && a[1] >= b[1]) return true;
  return false;
};

/**
 * get frame priority
 * @param {*} tween
 * @param {*} cur
 */
export const getLevel = (tween, cur) => {
  let level;
  if (cur < tween.delay) {
    level = [-1, cur - tween.delay];
  } else if (cur <= tween.delay + tween.duration) {
    level = [1, 0];
  } else {
    level = [0, tween.delay + tween.duration - cur];
  }
  return level;
};
