//Given the mapping a = 1, b = 2, ...z = 26, and an encoded message, count the number of
// ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as
// 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable.For example, '001' is not allowed


// function decode(number) {
//   // code
// }

function range(start, end) {
  if (typeof start === "number" && typeof end === "number") {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  }
  else if (typeof start === "string" && typeof end === "string") {
    if (start.charCodeAt(0) === end.charCodeAt(0)) return [start]
    return [start, ...range(String.fromCharCode(start.charCodeAt(0) + 1), end)];
  }
  else {
    return "'start' and 'end' should be same type"
  }
}

function subset(string) {
  string = `${string}`
  let ary = [],
    subarray,
    char_ary;
  for (i = 1; i <= string.length; i++) {
    char_ary = string.split('')
    subarray = []
    if (char_ary.length % i !== 0) {
      subarray.push(char_ary.splice(0, char_ary.length % i).join(''))
      while (char_ary.length) {
        subarray.push(char_ary.splice(0, i).join(''))
      }
      ary.push(subarray)
    }
    subarray = []
    char_ary = string.split('')
    while (char_ary.length) {
      subarray.push(char_ary.splice(0, i).join(''));
    }
    ary.push(subarray)
  }
  return ary;
}

function decode(n) {
  let letters = range('a', 'z')
  numbers.forEach((ele, idx) => {
    hash[letters[idx]] = ele
  })
  let set = subset(n);
  let answer = set.map(ele => {
    return ele.map(x => {
      return letters[Number(x) - 1]
    }).join('')
  })
  return answer.filter((ele) => { return ele !== ''; });

}
console.log(decode(111))
