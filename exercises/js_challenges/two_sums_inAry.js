// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass ?


// BINARY SEARCH O(n log n)

const binarySearch = (sortedArr, target) => {
  let min = 0,
    max = sortedArr.length - 1,
    guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (sortedArr[guess] === target) {
      return guess;
    } else {
      if (sortedArr[guess] < target) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return false;
}
// does a loop of n, then binary search which looks at the middle of a 
// sorted array if its smaller than it goes left larger goes right
const twoSum = (arr, target) => {
  let sortedArr = arr.sort(),
    results = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let diff = target - sortedArr[i],
      binaryIndex = binarySearch(sortedArr, diff);
    if (binaryIndex) {
      results.push([sortedArr[i], sortedArr[binaryIndex]]);
    }
  }
  return results;
}

// GREEDY APPROACH O(n)
function two_sum(array,target){
  let map = {}
  for(let i = 0; i <array.length; i ++){
   if (map[i] != undefined) { return true }
    map[target - array[i]] = array[i]
  }
  return false
}
console.log(two_sum([10, 15, 3, 7], 17));