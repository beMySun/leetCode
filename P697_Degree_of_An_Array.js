var findShortestSubArray = function (nums) {
  let map = {}
  
  // Initinalize nums into a map:
  // {
  //   'key': [startIndex, endIndex, degree]
  // }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      let temp = map[nums[i]];
      temp[1] = i;
      temp[2]++;
    } else {
      map[nums[i]] = [i, i, 1];
    }
  }
  let res = nums.length, max = 0;
  Object.keys(map).forEach((key) => {
    let temp = map[key];
    if (temp[2] > max) {
      max = temp[2];
      res = temp[1] - temp[0];
    } else if (temp[2] === max) {
      res = Math.min(res, temp[1] - temp[0]);
    }
  });
  return res + 1;
};

var result = findShortestSubArray([1, 2, 2, 3, 1, 4, 2])
console.log(result)
