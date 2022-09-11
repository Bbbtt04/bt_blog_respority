var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name);
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name);
    }
  }
}

var person2 = {name: 'person2'}

person1.foo1()  // person1 隐式绑定person1
person1.foo1.call(person2) // person2 显式绑定person2

person1.foo2() // window
person1.foo2.call(person2) // window

person1.foo3()()  // window
person1.foo3.call(person2)() // window
person1.foo3().call(person2) // person2

person1.foo4()() // person1
person1.foo4.call(person2)() // person2
person1.foo4().call(person2) // person1

/*
  person1
  01_this指向.js:6 person2
  201_this指向.js:8 window
  201_this指向.js:11 window
  01_this指向.js:11 person2
  01_this指向.js:16 person1
  01_this指向.js:16 person2
  01_this指向.js:16 person1
*/
