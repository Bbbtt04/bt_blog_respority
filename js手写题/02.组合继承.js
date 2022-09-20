function Parent(value) {
  this.val = value
}
Parent.prototype.getVal = function () {
  console.log(this.val)
}
// 通过this继承父类属性
function Child(val) {
  Parent.call(this, val)
}
// 通过new继承父类的函数
Child.prototype = new Parent()

const child = new Child(1)
child.getVal() // 1
console.log(child instanceof Parent) // true
