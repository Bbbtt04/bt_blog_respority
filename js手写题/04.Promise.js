const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.val = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.val = value
      that.resolvedCallbacks.map((cb) => cb(that.val))
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.val = value
      that.resolvedCallbacks.map((cb) => cb(that.val))
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejectd) {
  const that = this
  const Fulfuilled = typeof onFulfilled === 'function' ? onFulfilled : () => {}
  const Rejected = typeof onRejectd === 'function' ? onRejectd : () => {}

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(Fulfuilled)
    that.rejectedCallbacks.push(Rejected)
  }
  if (that.state === RESOLVED) {
    Fulfuilled(that.val)
  }
  if (that.state === REJECTED) {
    Rejected(that.val)
  }
}
