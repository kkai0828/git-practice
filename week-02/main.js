// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js'

let stack = new Stack()
stack.print()
console.log('push: 5, 8, 6')
stack.push(5)
stack.push(8)
stack.push(6)
stack.print()

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？

// test pop
console.log('stack.pop() ->', stack.pop())
console.log('---')
// test peek
stack.print()
console.log('stack.peek() ->', stack.peek())
// test peek do not remove the top element
stack.print()
console.log('---')
console.log('stack.push(11)')
stack.push(11)
// test size
console.log('stack.size() ->', stack.size())
// test isEmpty
console.log('---')
console.log('stack.empty() ->? ', stack.isEmpty())
console.log('stack.clear()')
stack.clear()
// test  isEmpty after clear
console.log('stack.empty() ->? ', stack.isEmpty())
// test pop() and peek() when stack is empty
console.log('---')
console.log('stack.pop()')
if (stack.pop() == undefined) {
  console.log('stack is empty. Can not pop()')
} else {
  console.log('stack is not empty :')
  stack.print()
}
console.log('stack.peek()')
if (stack.peek() == undefined) {
  console.log('stack is emptym can not peek()')
} else {
  console.log('stack is not empty :')
  stack.print()
}
