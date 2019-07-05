var arrayPairSum = function (nums) {
  var sortedNums = nums.sort(function (a, b) { return a - b })
  var sum = 0;
  for (var i = 0; i < sortedNums.length; i += 2) {
    sum += sortedNums[i]
  }
  return sum;
};