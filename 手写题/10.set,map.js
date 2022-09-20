let s = new Set([1, 2, 1, [2, 1]])

s.add(4)
console.log(s)
s.delete(2)
console.log(s)
console.log(s.entries())
