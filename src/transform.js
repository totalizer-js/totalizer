export default function getElementTransforms(el) {
  const str = el.style.transform || '';
  const reg = /(\w+)\(([^)]*)\)/g;
  const transforms = new Map();
  let m = reg.exec(str);
  while (m) { transforms.set(m[1], m[2]); m = reg.exec(str); }
  return transforms;
}
