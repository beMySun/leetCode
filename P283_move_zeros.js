/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
	var countOfValidNumbers = 0;
	for(var i = 0 ; i < nums.length; i++) {
		if(nums[i] != 0) { // move forward
			nums[countOfValidNumbers] = nums[i];
			countOfValidNumbers++;
		}
	}

    for(var j = countOfValidNumbers; j < nums.length; j++) {
        nums[j] = 0
    }

};