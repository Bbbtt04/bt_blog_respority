/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let n = code.length,
    res = Array.from({ length: n }).fill(0),
    sum = Array.from({ length: 2 * n + 10 }).fill(0)
  for (let i = 1; i <= 2 * n; i++) sum[i] = sum[i - 1] + code[(i - 1) % n]
  for (let i = 1; i <= n; i++) {
    if (k < 0) res[i - 1] = sum[i + n - 1] - sum[i + n + k - 1]
    else res[i - 1] = sum[i + k] - sum[i]
  }
  console.log(res)
  return res
}
decrypt([1, 2, 3], 2)
