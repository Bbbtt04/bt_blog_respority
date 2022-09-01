Function.prototype.MyBind = function (context) {
    if(typeof context !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)
    //返回一个函数
    return function F(){
        if(this instanceof F) {
            return new _this(...args,...arguments)
        }
        return _this.apply(context,args.concat(...arguments))
    }
}