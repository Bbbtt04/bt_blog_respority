/*
  原始
  string boolean number null undefined bigint symbol
*/

// 数组的类型标注
const arr1: string[] = ['1','2']
const arr2: Array<string> = ['1','2']

// 元组代替数组

/*
  1.元组可以规定长度
*/
const arr3: string[] = ['w','b','t']
console.log(arr3[999]);

const arr4: [string,string,string] = ['w','b','t']
// console.log(arr4[99]); //报错

/*
  2.元组可以规定每个位置的类型
*/
const arr5: [number,string,boolean] = [111,'wbt',true]

/*
  3.每个位置可选 后面标记? ts会自动给这个位置标注 (类型|undefined)
*/
const arr6: [number,string?,boolean?] = [1,,]
