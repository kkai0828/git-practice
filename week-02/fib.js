function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

function fib2(n) {
  let f0 = 0
  let f1 = 1
  for (let i = 0; i < n; i++) {
    [f0, f1] = [f1, f0]
    f1 = f0 + f1
  }
  return f0
}
function fibTest(fibFn, n) {
  let totalTime = 0
  let iterations = 1000
  for (let i = 0; i < iterations; i++) {
    const start = performance.now()
    fibFn(n)
    const end = performance.now()
    totalTime += end - start
  }

  const averageTime = totalTime / iterations
  console.log(
    `Average time: fib(${n}) over ${iterations} iterations: ${averageTime.toFixed(4)} ms`
  )
}

// test recursive
console.log('---\nRecursive\n---')
console.log('fib(1) : ', fib(1))
fibTest(fib, 1)
console.log('fib(5) : ', fib(5))
fibTest(fib, 5)
console.log('fib(10) : ', fib(10))
fibTest(fib, 10)
console.log('fib(20) : ', fib(20))
fibTest(fib, 20)

console.log('\n---\nFor Loop\n---')
console.log('fib(1) : ', fib(1))
fibTest(fib2, 1)
console.log('fib(5) : ', fib(5))
fibTest(fib2, 5)
console.log('fib(10) : ', fib(10))
fibTest(fib2, 10)
console.log('fib(20) : ', fib(20))
fibTest(fib2, 20)
