/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var result = [];
  nums.sort(function(a,b) {return a -b})
  console.log('after sorted:', nums);
  
  for(var i=1; i < nums.length - 2; i++) {
    if(nums[i] - nums[i-1] !== 1 || nums[i] - nums[i-1] !== 0) {
      result.push(nums[i])
    }
  }
  return result
 };


 var r = findDisappearedNumbers([4,3,2,7,8,2,3,1]) // [ 1, 2, 2, 3, 3, 4, 7, 8 ]
 console.log(r)