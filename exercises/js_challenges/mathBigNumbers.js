function add(augend, addend) {
  augend = augend.split('')
  addend = addend.split('')
  let temp, sum = [], i;
  while (augend.length < addend.length) {
    augend.unshift('0')
  }
  for (i = augend.length - 1; i >= 0; i--) {
    if (temp) { augend[i] = Number(augend[i]) + Number(temp) }
    temp = 0
    sum[i] = Number(augend[i]) + Number(addend[i])
    if (String(sum[i]).length > 1) {
      temp = String(sum[i]).slice(0, 1)
      sum[i] = String(sum[i]).slice(1)
    }
  }
  return Number(sum.join('')) + "";
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
      minuend[i] = String(Number(minuend[i]) + 10)
    }
    sum[i] = Number(minuend[i]) - Number(subtrahend[i])
  }
  return Number(sum.join('')) + "";
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
      sum[isum] ? sum[isum] += Number(multiplicand[i]) * Number(multiplier[j]) : sum[isum] = Number(multiplicand[i]) * Number(multiplier[j])
      if (String(sum[isum]).length > 1) {
        sum[isum + 1] ? sum[isum + 1] += +String(sum[isum]).slice(0, 1) : sum[isum + 1] = +String(sum[isum]).slice(0, 1)
        sum[isum] = +String(sum[isum]).slice(1)
      }
      isum++
    }
  }
  return Number(sum.reverse().join('')) + ""
}