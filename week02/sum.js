function sum(ary) {
  // TODO: sum all elements in ary
  return ary.reduce((acc, cur) => acc + cur, 0)
}
function sum2(ary) {
  // TODO: sum all elements in ary
  let sum = 0
  ary.forEach((num) => (sum += num))
  return sum
}

function sum3(ary) {
  let sum = 0;
  ary.map(num => {
    sum += num;
  });
  return sum;
}

function sum4(ary) {
  return eval(ary.join('+'));
}

console.log(sum([1, 5, 3, 2])) // 11
console.log(sum2([1, 5, 3, 2])) // 11
console.log(sum3([1, 5, 3, 2])) // 11
console.log(sum4([1, 5, 3, 2])) // 11
