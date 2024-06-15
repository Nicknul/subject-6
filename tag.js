const tagComponent = (tagName, idName, textNode) => {
  return `<${tagName} id="${idName}">${textNode}</${tagName}>`;
};

console.log(tagComponent('button', 'bu1', 'test'));
