/** 
 * 83 / 83 test cases passed.
  Status: Accepted
  Runtime: 104 ms
  Memory Usage: 38 MB83 / 83 test cases passed.
  Status: Accepted
  Runtime: 104 ms
  Memory Usage: 38 MB
  Your runtime beats 58.16 % of javascript submissions.
 * 
*/

// https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let formattedArray = A.map(val => val.split(""));
  let start = formattedArray[0];
  const commonCharacter = [];
  for (let val of start) {
    const foundArray = [];
    for (let i = 1; i < formattedArray.length; i++) {
      const index = formattedArray[i].indexOf(val);
      const foundStatus = index > -1;
      foundArray.push(foundStatus);
      if (foundStatus) {
        formattedArray[i][index] = "found";
      }
    }
    if (!foundArray.includes(false)) {
      commonCharacter.push(val);
    }
  }

  return commonCharacter;
};