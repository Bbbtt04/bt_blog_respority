function MyNew(className, ...args) {
  let obj = {}
  obj.__proto__ = MyNew.prototype
  className.apply(obj, ...args)
  return obj
}
