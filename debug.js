const nodes = [];
const debug = (name, value) => {
  if (name && nodes[name]) nodes[name].innerHTML = `${name}:${value}`;
  else nodes[name] = document.querySelector(`#${name}`);
};

export default debug;
