export default function getElementTransforms(el) {
  const str = el.style.transform || '';
  const reg = /(\w+)\(([^)]*)\)/g;
  const transforms = new Map();
  // eslint-disable-next-line no-cond-assign
  let m; while (m = reg.exec(str)) transforms.set(m[1], m[2]);
  return transforms;
}
