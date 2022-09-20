function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj
  if (typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (hash.has(obj)) return hash.get(obj)
  // 处理数组和对象
  let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
  hash.set(obj, newObj)
  Object.keys(newObj).forEach((key) => {
    newObj[key] = deepClone(newObj[key], hash)
  })
  return newObj
}

let obj = {
  a: [1, 2],
  b: function () {
    console.log(11)
  },
  c: new Date(),
  d: new RegExp(),
}
obj.xxx = obj

let newObj = deepClone(obj)

console.log(newObj)
