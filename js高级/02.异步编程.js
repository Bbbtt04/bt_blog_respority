// let a = 0
// let b = async () => {
//   a = a + (await 10)
//   console.log('2', a)
// }
// b()
// a++
// console.log('1', a)
/*
  面试题: 说一说async和await特点?有什么优缺点?原理?
  1. 一个函数加上async会返回一个Promise await接收返回值
  2. 解决了链式调用问题  但是await失败后面的代码不会执行
  3. async就是给函数包裹了一层Promise.resolve()  await内部实现了generator
*/
