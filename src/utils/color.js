const RE_HEX = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
const RE_HEX_2 = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
const RE_RGB = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
const RE_RGBA = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/;
const RE_HSL = /^hsl\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/;
const RE_HSLA = /^hsla\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*([\d.]+)\s*\)$/;

const hue2rgb = (p, q, t) => {
  let tc = t;
  if (tc < 0) tc += 1;
  if (tc > 1) tc -= 1;
  if (tc < 1 / 6) return p + (q - p) * 6 * tc;
  if (tc < 1 / 2) return q;
  if (tc < 2 / 3) return p + (q - p) * (2 / 3 - tc) * 6;
  return p;
};

/**
 * Determine whether the parameter is a color value
 * 色值：hex，rgb，rgba，hsl，hsla
 * @param {any} s
 */
export const isColor = (s) => {
  const str = s.toString().trim();
  return [RE_HEX, RE_HEX_2, RE_RGB, RE_RGBA, RE_HSL, RE_HSLA]
    .some((re) => re.test(str));
};

/**
 * Convert the color value to RGBA value
 * @param {string} color
 */
export const color2rgba = (color) => {
  const str = color.trim();
  let rgba;
  /* hex */
  rgba = RE_HEX.exec(str);
  if (rgba) {
    return [
      parseInt(`${rgba[1]}${rgba[1]}`, 16),
      parseInt(`${rgba[2]}${rgba[2]}`, 16),
      parseInt(`${rgba[3]}${rgba[3]}`, 16),
      1,
    ];
  }
  rgba = RE_HEX_2.exec(str);
  if (rgba) {
    return [
      parseInt(rgba[1], 16),
      parseInt(rgba[2], 16),
      parseInt(rgba[3], 16),
      1,
    ];
  }

  /* rgb & rgba */
  rgba = RE_RGB.exec(str) || RE_RGBA.exec(str);
  if (rgba) {
    return [
      parseInt(rgba[1], 10),
      parseInt(rgba[2], 10),
      parseInt(rgba[3], 10),
      rgba[4] !== undefined ? parseFloat(rgba[4], 10) : 1,
    ];
  }

  /* hsl & hsla */
  const hsl = RE_HSL.exec(str) || RE_HSLA.exec(str);
  if (hsl) {
    const [h, s, l, a] = [
      parseInt(hsl[1], 10) / 360,
      parseInt(hsl[2], 10) / 100,
      parseInt(hsl[3], 10) / 100,
      hsl[4] !== undefined ? parseFloat(hsl[4], 10) : 1,
    ];

    if (s === 0) {
      return [l, l, l, a];
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return [
      hue2rgb(p, q, h + 1 / 3),
      hue2rgb(p, q, h),
      hue2rgb(p, q, h - 1 / 3),
      a,
    ];
  }
  return null;
};
