"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floodFill = floodFill;
const img = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
function floodFill(img, sr, sc, newColor) {
    const originalColor = img[sr][sc];
    if (originalColor === newColor) {
        return img;
    }
    const rows = img.length;
    const cols = img[0].length;
    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }
        if (img[row][col] !== originalColor) {
            return;
        }
        img[row][col] = newColor;
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
    dfs(sr, sc);
    return img;
}
// console.log(floodFill(img, 0, 0, 5));
//Out Put  [
//     [5, 5, 5],
//     [5, 5, 5],
//     [5, 5, 5]
// ]
