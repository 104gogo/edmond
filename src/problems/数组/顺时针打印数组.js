const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]

const foo = (arr) => {
  const row = arr[0].length
  const col = arr.length
  let x = 0
  let y = 0
  let count = 0

  for (let i = 0; i < row * col; i++) {
    console.log(arr[x][y]);
    arr[x][y] = ''

    let tx = x + dir[count % 4][0]
    let ty = y + dir[count % 4][1]
    if (tx < 0 || tx >= col || ty < 0 || ty >= row || !arr[tx][ty]) {
      count++
      tx = x + dir[count % 4][0]
      ty = y + dir[count % 4][1]
    }
    x = tx
    y = ty
  }
}

foo([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]);