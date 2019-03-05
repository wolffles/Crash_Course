// function add(augend, addend) {
//   let temp, sum = [], i=0, x=0;
//   while (augend.length < addend.length) {
//     augend = '0'+ augend
//   }
//   Math.ceil(augend.length-1 * .5) > 10 ? temp = Math.ceil(augend.length-1 * .3) : temp = Math.ceil(augend.length-1 * .5)
// //   for(i = augend.length-1; i >= 0; i--){
// //     if(temp) { augend[i] = Number(augend[i]) + Number(temp) }
// //     temp = 0
// //     sum[i] = Number(augend[i]) + Number(addend[i])
// //     if (String(sum[i]).length > 1){
// //       temp = String(sum[i]).slice(0,1)
// //       sum[i] = String(sum[i]).slice(1)
// //     }
//   while(i < augend.length-1) {
//     x = +augend.slice(i,temp) + +addend.slice(i,temp)
//     if (sum.length){
//       if (x+''.length > temp) {
//         x = x+''.slice(1)
//         x[0] += 1
//       }
//     sum.push(x)
//     }
//   i += temp-1
//   }
//   return sum.join('');
// }

function add(augend, addend) {
  let temp, sum = [], i = 0, j = 0, x = 0;
  while (augend.length !== addend.length) {
    if (augend.length < addend.length) {
      augend = '0' + augend
    } else { addend = '0' + addend }
  }
  Math.ceil(augend.length * .5) > 10 ? temp = Math.ceil(augend.length * .3) : temp = Math.ceil(augend.length * .5)
  j = temp
  while (i < augend.length) {
    x = +augend.slice(i, j) + +addend.slice(i, j)
    if (sum.length) {
      if (String(x).length > augend.slice(i, j).length) {
        x = String(x).slice(1)
        sum[0] += 1
      }
    }
    sum.push(x)
    i += temp
    j += temp
  }
  return sum.join('');
}

function subtract(minuend, subtrahend) {
  minuend = minuend.split('')
  subtrahend = subtrahend.split('')
  while (subtrahend.length < minuend.length) {
    subtrahend.unshift('0')
  }
  let temp, sum = [], i;
  for (i = minuend.length - 1; i >= 0; i--) {
    if (temp) { minuend[i] = Number(minuend[i]) + temp }
    temp = 0
    if (Number(minuend[i]) < Number(subtrahend[i])) {
      temp = -1
      minuend[i] = Number(minuend[i]) + 10
    }
    sum[i] = Number(minuend[i]) - Number(subtrahend[i])
  }
  return sum.every(ele => ele + '' === '0') ? '0' : sum.join('').replace(/0*(?=[1-9])/, '');
}

function multiply(multiplicand, multiplier) {
  multiplicand = multiplicand.split('')
  multiplier = multiplier.split('')
  let j,
    isum = 0,
    sum = [],
    i
  while (multiplicand.length !== multiplier.length) {
    multiplicand.length < multiplier.length ? multiplicand.unshift('') : multiplier.unshift('')
  }
  for (i = multiplier.length - 1; i >= 0; i--) {
    isum = multiplier.length - 1 - i
    for (j = multiplicand.length - 1; j >= 0; j--) {
      typeof sum[isum] === "number" ? sum[isum] += Number(multiplicand[i]) * Number(multiplier[j]) : sum[isum] = Number(multiplicand[i]) * Number(multiplier[j])
      if (String(sum[isum]).length > 1) {
        typeof sum[isum + 1] === "number" ? sum[isum + 1] += +String(sum[isum]).slice(0, 1) : sum[isum + 1] = +String(sum[isum]).slice(0, 1)
        sum[isum] = +String(sum[isum]).slice(1)
      }
      isum++
    }
  }
  return sum.reverse().every(ele => ele + '' === '0') ? '0' : sum.join('').replace(/0*(?=[1-9])/, '');
}

// function multiply(multiplicand, multiplier) {
//   let sum = '0',
//     i = 0
//   while (i < +multiplier) {
//     sum = add(multiplicand, sum)
//     i++
//   }
//   return sum
// }

function arrayComp(a, b) {
  if (a.length > b.length) {
    return true
  } else if (+a[0] === +b[0] && a.length > 1) {
    return arrayComp(a.splice(1), b.splice(1))
  }
  else { return +a[0] >= +b[0] ? true : false }
}

// function divide(dividend, divisor) {
//   dividend = dividend.split('')
//   let sum = 0,
//     temp = multiply(divisor, sum + 1 + '').split('')
//   while (arrayComp(dividend, temp)) {
//     sum++
//     temp = multiply(divisor, sum + 1 + '').split('')
//   }
//   return String(sum);
// }
function strComp(a, b) {
  while (a.length < b.length) {
    a = '0' + a
  }
  return a
}
function divide(dividend, divisor) {
  if (strComp(dividend, divisor) < strComp(divisor, dividend)) { return '0' }
  let i = 0, j = 0, ans = [], remainder, size = divisor.length;
  while (strComp(dividend, divisor) >= strComp(divisor, dividend)) {
    remainder = dividend.slice(i, i + size)
    dividend = dividend.slice(i + size)
    ans[j] = 0
    if (strComp(remainder, divisor) < strComp(divisor, remainder)) {
      remainder = remainder + dividend.slice(0, 1)
      dividend = dividend.slice(1)
    }
    while (strComp(remainder, divisor) >= strComp(divisor, remainder)) {
      remainder = subtract(remainder, divisor)
      ans[j] += 1
    }
    if (remainder === '0' & dividend === '0') {
      while (dividend) {
        ans.push('0')
        j++
        dividend = dividend.slice(1)
      }
    } else {
      dividend = remainder + dividend
      j++
    }
  }
  return ans.join('')
}

