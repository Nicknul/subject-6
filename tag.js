const tagComponent = (tagName, idName, textNode) => {
  return `<${tagName} id="${idName}">${textNode}</${tagName} id="${idName}">`;
};
