
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix.length === 0||arguments.length === "undefined") {
    return [];
  }
  let towelSortarr = [];
  //let pushElement;
  for (let i = 0; i < matrix.length; i++) {
      let pushElement = (i % 2 === 0) ? matrix[i] : matrix[i].reverse();
       for (let j = 0; j < pushElement.length; j++) {
        towelSortarr.push(pushElement[j]);
         
       }
  }
  return towelSortarr;
}
