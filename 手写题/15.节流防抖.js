function debounce(fn, wait) {
  let timer = null

  return function () {
    let ctx = this,
      args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(ctx, arguments)
    }, wait)
  }
}

function throttle(fn, delay) {
  let currentTime = Date.now()
  return function () {
    let ctx = this,
      args = arguments,
      nowTime = Date.now()
    if (nowTime - currentTime >= delay) {
      currentTime = Date.now
      return fn.apply(ctx, args)
    }
  }
}
