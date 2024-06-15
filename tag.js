const tagComponent = (tagName, idName, textNode) => {
  return `<${tagName} id="${idName}">${textNode}</${tagName}>`;
};

// console.log(tagComponent('button', 'bu1', 'test'));
let arr = [];

const container = () => {
  for (let i = 1; i <= 5; i++) {
    let buttonTag = tagComponent('button', `bu${i}`, `test${i}`);
    arr.push(buttonTag);
  }
};
container();

root.innerHTML = arr.join('');

console.log(arr);
