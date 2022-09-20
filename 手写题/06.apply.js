Function.prototype.MyApply = function (context) {
  if (typeof context !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let res
  if (arguments[1]) {
    res = context.fn(arguments[1])
  } else {
    res = context.fn()
  }
  delete context.fn
  return res
}
