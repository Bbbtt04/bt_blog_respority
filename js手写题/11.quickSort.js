const _quickSort = (array, l = 0, r = array.length) => {
  // 补全代码
  if (l >= r) return
  let i = l - 1,
    j = r,
    x = array[(l + r) >> 1]
  while (i < j) {
    while (array[++i] < x);
    while (array[--j] > x);
    if (i < j) [array[i], array[j]] = [array[j], array[i]]
  }
  _quickSort(array, l, j), _quickSort(array, j + 1, r)
}

let arr = [1, 3, 4, 12, 5, 3]
_quickSort(arr)
console.log(arr)
