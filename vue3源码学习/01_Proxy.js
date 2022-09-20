/**
 *
 * const origin = {a: '100'};
 * const obj = new Proxy(origin, {
 *     get(target, p, receiver) {
 *         if(p in target) {
 *             return target[p]
 *         } else {
 *             throw new ReferenceError("error")
 *         }
 *     },
 * })
 *
 * console.log(obj.a) //100
 * console.log(obj.b) //error
 * **/

/*
const target = {
    _id: '1024',
    name: 'vuejs'
}

const validators = {
    name(val) {
        return typeof val === 'string'
    },
    _id(val) {
        return typeof val === 'number' && val > 1024
    }
}
const createValidator = (target, validator) => {
    return new Proxy(target, {
        _valiator: validator,
        set(target, p, value, receiver) {
            let valiator = this._valiator[p](value)
            if (valiator) {
                return Reflect.set(target, p, value, proxy)
            } else {
                throw Error(`Cannot set ${p} to ${value}. Invalid type.`)
            }
        }
    })
}
let proxy = createValidator(target, validators);
proxy.name = 1
 */
