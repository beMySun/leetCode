var twoSum = function(numbers, target) {
  var i = 0, j = numbers.length - 1;
    while(i<j) {
      if(numbers[i] + numbers[j] === target) {
        return [i+1, j+1]
      } else if(numbers[i] + numbers[j] > target) {
        j--
      } else {
        i++
      }
    }
  return [-1, -1]
};