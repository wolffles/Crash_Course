// Given an array of integers, find the first missing positive integer in linear time 
// and constant space.In other words, find the lowest positive integer that does 
// not exist in the array.The array can contain duplicates and negative numbers as well.

// For example, the input[3, 4, -1, 1] should give 2. The input[1, 2, 0] should give 3.

// You can modify the input array in -place.

function swap(ary, a, b) {
  temp = ary[a]
  ary[a] = ary[b]
  ary[b] = temp
  return ary
}

function segregate(ary, n) {
  let start = 0,
    i;
  for (i = 0; i < n; i++) {
    if (ary[i] <= 0) {
      ary = swap(ary, i, start)
      start++;
    }
  }
  return ary
}

function findMissingPositive(ary, n) {
  ary = segregate(ary, n);
  let start = 0;
  while (ary[start] <= 0) {
    start++
  }
  n = n - start
  ary = ary.splice(start)
  for (let i = 0; i < n; i++) {
    if (Math.abs(ary[i]) < n + 1 && ary[Math.abs(ary[i]) - 1] > 0) {
      ary[Math.abs(ary[i]) - 1] = -ary[Math.abs(ary[i]) - 1];
    }
  }
  for (let k = 0; k < n; k++) {
    if (ary[k] > 0) {
      return k + 1;
    }

  }
  return n + 1;
}

array1 = [0, 10, 2, -10, -20] //=> 1
console.log(findMissingPositive(array1, array1.length))
array2 = [3, 4, -1, 1] // =>2
console.log(findMissingPositive(array2, array2.length))
array3 = [1, 2, 0] // =>3
console.log(findMissingPositive(array3, array3.length))
array = [2, 3, -4, -6, 1, 7] // => 4
console.log(findMissingPositive(array, array.length))


