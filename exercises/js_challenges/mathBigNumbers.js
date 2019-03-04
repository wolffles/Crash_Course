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