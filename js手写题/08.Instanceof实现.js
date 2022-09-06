const _instanceof = (target, Fn) => {
  let proto = target.__proto__
  let prototype = Fn.prototype
  while(true) {
      if(proto === prototype) return true;
      if(!proto) return false;
      proto = proto.__proto__
  }
}
