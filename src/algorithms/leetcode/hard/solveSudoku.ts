/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  let solved: boolean = false;
  const rowBits: number[] = [];
  const columBits: number[] = [];
  const suduku: Map<string, number> = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const num = parseInt(board[i][j]);
        const bit = 1 << (num - 1);
        rowBits[i] |= bit;
        columBits[j] |= bit;

        const suduku1 = Math.floor(i / 3);
        const suduku2 = Math.floor(j / 3);
        const key = `${suduku1}-${suduku2}`;
        suduku.set(key, (suduku.get(key) || 0) | bit);
      }
    }
  }

  solve(board, [0, 0]);

  function solve(board: string[][], [x, y]: [number, number]) {
    if (solved) return;
    if (x === 9 || y === 9) {
      solved = true;
      return;
    }

    const nextPos: [number, number] = y < 8 ? [x, y + 1] : [x + 1, 0];
    const value = board[x][y];
    if (value !== ".") {
      solve(board, nextPos);
    } else {
      for (let i = 1; i <= 9; i++) {
        const rowBit = rowBits[x];
        const columBit = columBits[y];

        const suduku1 = Math.floor(x / 3);
        const suduku2 = Math.floor(y / 3);
        const key = `${suduku1}-${suduku2}`;
        const sudukuBit = suduku.get(key);
        const bit = 1 << (i - 1);
        if ((bit & (rowBit | columBit | (sudukuBit as number))) === 0) {
          rowBits[x] |= bit;
          columBits[y] |= bit;
          suduku.set(key, (sudukuBit as number) | bit);
          board[x][y] = String(i);
          solve(board, nextPos);
          if (!solved) {
            rowBits[x] ^= bit;
            columBits[y] ^= bit;
            suduku.set(key, (suduku.get(key) as number) ^ bit);
            board[x][y] = ".";
          }
        }
      }
    }
  }
}
