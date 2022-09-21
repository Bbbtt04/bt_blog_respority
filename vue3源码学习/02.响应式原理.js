let activeEffect
function effect(fn) {
  activeEffect = fn
  fn()
}
// 存放副作用函数的桶
const bucket = new WeakMap()
let data = {}
const obj = new Proxy(data, {
  get(target, key) {
    console.log(`${target}的${key} get`)
    // 没有activeEffect直接return
    if (!activeEffect) return target[key]
    // 根据target获取桶中的depsMap
    let depsMap = bucket.get(target)
    // 如果不存在depsMap 新建一个Map并与target关联
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()))
    }
    // 根据key获取deps
    let deps = depsMap.get(key)
    // 如果不存在deps 同样新建一个set与key关联
    if (!deps) {
      depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    return target[key]
  },
  set(target, key, newVal) {
    console.log(`${target}的${key} set ${newVal}`)
    // 设置新值
    target[key] = newVal
    // 获取target的depsMap
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach((fn) => fn())
  },
})
obj.text = '1'
let name
function changeName() {
  name = obj.text
}
effect(changeName)
setTimeout(() => {
  obj.text = '2'
  console.log(name)
}, 1000)
