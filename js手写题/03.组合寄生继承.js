/* function Parent(val) {
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
child.getVal() */

function Parent(name) {
    this.name = name;
    this.colors = ['red','blue','yellow']
}
Parent.prototype.getName = function () {
    console.log(this.name);
}
function Child(name) {
    Parent.call(this,name)
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child;

const child = new Child('wbt')
child.getName()
