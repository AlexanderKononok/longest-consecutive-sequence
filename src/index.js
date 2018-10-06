module.exports = function longestConsecutiveLength(array) {
  // your solution here
  const arr = array;
  const arrLength = array.length; 
  let result = 0;
  let count = 1;

  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 1; i < arrLength; i++) {
    if (arr[i] - arr[i - 1] == 1) {
      count++;
    }
    if (arr[i] - arr[i - 1] > 1) {
      if (count > result) {
        result = count;
      } else {
        result;
      }
      count = 1;
    }
  }
  if (arrLength == 1) {
    return 1;
  }
  return result;
}
