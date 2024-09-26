function sum(ary) {
  // TODO: sum all elements in ary
  // 優點：內建函式、更多優化的設計

  // if ary is a number, return sum of 1 to ary
  if (typeof ary === 'number') {
    let tmp = []
    for (let i = 1; i <= ary; i++) {
      tmp.push(i)
    }
    return tmp.reduce((acc, cur) => acc + cur, 0)
  }
  return ary.reduce((acc, cur) => acc + cur, 0)
}

function sum2(ary) {
  // TODO: sum all elements in ary
  // 優點：forEach 簡潔、易讀、通用
  let sum = 0
  ary.forEach((num) => (sum += num))
  return sum
}

function sum3(ary) {
  // map 通常不是這樣用的，容易造成別人被誤導
  let sum = 0
  ary.map((num) => {
    sum += num
  })
  return sum
}

function sum4(ary) {
  // eval 簡單來說就是把說的執行出來
  // ary.join('+') => '1+5+3+2'
  // eval('1+5+3+2') => 11
  return eval(ary.join('+'))
  // 安全性較差(應該避免使用)
  // 若被植入惡意程式碼，可能造成資安問題
}

console.log('reduce:', sum([1, 5, 3, 2])) // 11
console.log('---')
console.log('forEach:', sum2([1, 5, 3, 2])) // 11
console.log('---')
console.log('map:', sum3([1, 5, 3, 2])) // 11
console.log('---')
console.log('eval:', sum4([1, 5, 3, 2])) // 11
console.log('typeof [1, 5, 3, 2].join(' + '):', typeof [1, 5, 3, 2].join('+'))
console.log(
  'typeof eval([1, 5, 3, 2].join(+)):',
  typeof eval([1, 5, 3, 2].join('+'))
)
// test arr is a number
console.log('---')
console.log('test arr is a number:', sum(3)) // 6
