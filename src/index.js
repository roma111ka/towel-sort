
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === "undefined") {
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
