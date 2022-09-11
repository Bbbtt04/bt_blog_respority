class EventEmitter {
  // 补全代码
  constructor() {
      this.events = {}
  }
  on(event,fn) {
      if(!this.events[event]) {
          this.events[event] = [fn]
      } else {
          this.events[event].push(fn)
      }
  }
  emit(event) {
      if(this.events[event]) {
          this.events[event].forEach(fn => fn())
      }
  }
}
