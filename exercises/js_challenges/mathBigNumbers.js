function add(augend, addend) {
  while (augend.length !== addend.length) {
    if (augend.length < addend.length) {
      augend = '0' + augend
    } else { addend = '0' + addend }
  }
  let sum = [], i;
  for (i = augend.length - 1; i > -1; i--) {
    sum[i + 1] = (sum[i + 1] ? sum[i + 1] : 0) + +augend.slice(i, i + 1) + +addend.slice(i, i + 1)
    if (String(sum[i + 1]).length > 1) {
      sum[i] = 1
      sum[i + 1] = String(sum[i + 1]).slice(1)
    }
  }
  return sum.join('')
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


function strComp(a, b) {
  while (a.length < b.length) {
    a = '0' + a
  }
  return a
}

function divide(dividend, divisor) {
  if (strComp(dividend, divisor) < strComp(divisor, dividend)) { return "0" }
  let i, j, temp = '', ans = [];
  for (i = 0; i < dividend.length; i++) {
    temp = temp + dividend.slice(i, i + 1)
    j = 0
    if (strComp(temp, divisor) >= strComp(divisor, temp)) {
      while (strComp(temp, divisor) >= strComp(divisor, temp)) {
        temp = subtract(temp, divisor)
        j++
      }
    }
    ans.push(j)
  }
  return ans.every(ele => ele + '' === '0') ? '0' : ans.join('').replace(/0*(?=[1-9])/, '');
}