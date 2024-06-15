const tagComponent = (tagName, idName, textNode) => {
  return `<${tagName} id="${idName}">${textNode}</${tagName}>`;
};

// console.log(tagComponent('button', 'bu1', 'test'));

const container = () => {
  for (let i = 1; i <= 5; i++) {
    console.log(tagComponent('button', `bu${i}`, `test${i}`));
  }
};
console.log(container());
