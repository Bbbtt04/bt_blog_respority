// 1. 字面量类型与联合类型
interface Res {
  code: 500 | 400 | 401
  status: 'success' | 'failure'
  data: object
}

declare var res: Res
if(res.status === 'success') {} // 完善的提示

// 2. 字面量类型详解
/*
  像上面的 success 它不是一个值,而代表着一个字面量类型,是原始类型的子类型(层级类型)
*/

// 3.联合类型: 一组类型的集合
//函数需要用()括起来
interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
}

// 联合类型的类型推导
interface Tmp2 {
  user:
  | {
      vip: true,
      expires: string
    }
  |
    {
      vip: false,
      promotion: string
    }
}

declare var tmp: Tmp2

if(tmp.user.vip) {
  console.log(tmp.user.expires);
}
