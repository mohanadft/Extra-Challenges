// Write code to return the largest number in the given array

var maxNum = function (arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) maxNum = arr[i];
  }
  return maxNum;
};
