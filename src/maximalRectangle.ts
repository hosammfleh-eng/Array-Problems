import { largestRectangleArea } from "./largestRectangleArea";

const matrix1 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

function maximalRectangle(matrix: number[][]): number {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights: number[] = new Array(cols).fill(0);
    let maxArea = 0;
   
    for (let i = 0; i < rows; i++) {
         for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }
        
        const area = largestRectangleArea(heights);
        if (area > maxArea) {
            maxArea = area;
        }
    }
    
    return maxArea;
}
export { maximalRectangle};



