/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 1: 80ms  Beats 93.86%
  // var a = nums[0]
  // for(var i = 1 ; i < nums.length; i++) {
  //     a ^= nums[i]
  // }
  // return a

  //2:  124ms  beats 45.61%
  nums.sort(function(a,b){return a-b})
  for(var i = 0 ; i < nums.length; i++) {
    if(i == 0 && nums[i] !== nums[i+1]) {
      return nums[i]
    } else if(i == nums.length-1 && nums[i] !== nums[i-1]) {
      return nums[i]
    } else if(nums[i] != nums[i-1] && nums[i] != nums[i+1]){
      return nums[i]
    }
  }
};

var r = singleNumber([4,1,2,1,2])
console.log(r)