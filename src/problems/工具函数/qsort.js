/**
 * 快排是二路划分的算法。如果待排序列中重复元素过多，也会大大影响排序的性能。
 * 这时候，如果采用三路划分，则会很好的避免这个问题。
 */

var qsort = arr => arr.length <=1?
  arr: qsort(arr.filter(x => x < arr[0]))
  .concat(arr.filter(x => x == arr[0])) // 去掉重复的
  .concat(qsort(arr.filter(x => x > arr[0])))