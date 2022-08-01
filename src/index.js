
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let resultArray = [];
  
  if (matrix === undefined) {
    return resultArray
  };

  for (let i=0; i<matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      resultArray.push(matrix[i])
    } else {
      resultArray.push(matrix[i].reverse());
    }
  }
  
  let finalArray = resultArray.flat();
  
  
    return finalArray;
   
}

