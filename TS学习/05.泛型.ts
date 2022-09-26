function identity<T>(arg: T) {
  return arg
}
// let output = identity<string>('wbt')

let output = identity('123')
// console.log(typeof output);

// 泛型函数
interface GenerateIdentity<T> {
  (arg:T):T
}
let myIdentity:GenerateIdentity<number> = identity

// 泛型约束
function getProperty<T,K extends keyof T>(obj:T,key:K){
  console.log(obj[key]);
}
let x = {a: 1,b:2,c:3}
// getProperty(x,'e')  ❌
getProperty(x,'a')

// 通过工厂函数认识类型约束
class BeeKeeper {
  hasMask: boolean | undefined
}
class LionKeeper {
  nametag: string | undefined
}
class Animal {
  numlength: number | undefined
}
class Bee extends Animal {
  keeper: BeeKeeper | undefined
}

class Lion extends Animal {
  keeper: LionKeeper | undefined
}

function createInstance<T extends Animal>(c:new()=>T):T {
  return new c()
}
createInstance(Lion).keeper?.nametag
createInstance(Bee).keeper?.hasMask
