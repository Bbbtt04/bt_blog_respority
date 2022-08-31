function Parent(val) {
    this.val = val
}
Parent.prototype.getVal = function (){
    console.log(this.val)
}
function Child(val){
    Parent.call(this.val)
}
Child.prototype = Object.assign(Parent.prototype,{
    constructor: {
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
})
const child = new Child(1);
child.getVal()