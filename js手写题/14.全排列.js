const _permute = (string) => {
  // 补全代码
  let dfs = (path) => {
    if (path.length === string.length) {
      res.push(path)
      return
    }
    for (const char of string) {
      if (path.indexOf(char) < 0) {
        dfs(`${path}${char}`)
      }
    }
  }
  const res = []
  dfs('')
  return res
}
console.log(_permute('abc'))
