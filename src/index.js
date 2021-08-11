
exports.min = function min (array) {
  if(!array || !array.length){
    return 0
  }
  let minValue = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < minValue){
      minValue = array[i];
    }
  }
  return minValue;
}

exports.max = function max (array) {
  if(!array || !array.length){
    return 0
  }
  let maxValue = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] > maxValue){
      maxValue = array[i];
    }
  }
  return maxValue;
}

exports.avg = function avg (array) {
  if(!array || !array.length){
    return 0
  }
  return array.reduce((a, b) => (a + b)) / array.length;
}
