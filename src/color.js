/**
 *  是否是hex
 * @param {String} str
 */
const isHex = (str) => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(str.trim());
const isRgb = (str) => /^rgb/.test(str);
const isHsl = (str) => /^hsl/.test(str);

const isColor = (str) => isHex(str) || isRgb(str) || isHsl(str);

function rgbToRgba(rgbValue) {
  const rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? `rgba(${rgb[1]},1)` : rgbValue;
}

const hexToRgba = (hexValue) => {
  const hex = hexValue.trim().replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => r + r + g + g + b + b,
  );
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);
  return `rgba(${r},${g},${b},1)`;
};

function hslToRgba(hslValue) {
  const hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  const h = parseInt(hsl[1], 10) / 360;
  const s = parseInt(hsl[2], 10) / 100;
  const l = parseInt(hsl[3], 10) / 100;
  const a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  let r; let g; let
    b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return `rgba(${r * 255},${g * 255},${b * 255},${a})`;
}

function colorToRgb(val) {
  if (isRgb(val)) return rgbToRgba(val);
  if (isHex(val)) return hexToRgba(val);
  if (isHsl(val)) return hslToRgba(val);
  return val;
}

console.log(isColor('#ffb '));
console.log(isColor('#ffb'));
console.log(colorToRgb('#ffb '));
// console.log(colorToRgb('rgb(0,0, 15)'));
// console.log(colorToRgb('rgba(0,0,15,.5 )'));
