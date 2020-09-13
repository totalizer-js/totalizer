// 直线
const straight = (x1, y1, x2, y2) => `M ${x1} ${y1} L ${x2} ${y2}`;

// 折线
const broken = (x1, y1, x2, y2) => {
  const xMid = (x2 + x1) / 2;
  return `M ${x1} ${y1} L ${xMid} ${y1} L ${xMid} ${y2} L ${x2} ${y2}`;
};

// 曲线
const curve = (x1, y1, x2, y2) => {
  const xMid = (x2 + x1) / 2;
  return `M ${x1} ${y1} C ${xMid} ${y1}, ${xMid} ${y2}, ${x2} ${y2}`;
};

// 二次曲线
const quadratic = (x1, y1, x2, y2) => {
  // const deg = 45;

  const x = 250;
  const y = 50;

  return `M ${x1} ${y1} Q ${x} ${y}, ${x2} ${y2}`;
};

const line = (opts = {}) => {
  const {
    x1, y1, x2, y2, type,
  } = opts;

  if (x1 === x2 || y1 === y2) return straight(x1, y1, x2, y2);

  switch (type) {
    case 'curve': return curve(x1, y1, x2, y2);
    case 'broken': return broken(x1, y1, x2, y2);
    case 'quadratic': return quadratic(x1, y1, x2, y2);
    default:
      return straight(x1, y1, x2, y2);
  }
};

export default line;
