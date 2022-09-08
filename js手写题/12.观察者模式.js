class Subject {
  constructor(name) {
    this.name = name
    this.state = '开心'
    this.observer = []
  }
  attach(o) {
    this.observer.push(o)
  }
  setState(newState) {
    this.state = newState
    this.observer.forEach(o => o.updata(this))
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  updata(baby) {
    console.log(this.name,baby);
  }
}
let baby = new Subject('baby')
let father = new Observer('father')
let mom = new Observer('mom')

baby.attach(father)
baby.attach(mom)

baby.setState('不开心')
