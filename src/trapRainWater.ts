
const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const heights2 = [4, 2, 0, 3, 2, 5];
function trapRainWater(arr: number[]): number {

    const n = arr.length;
    
    if (n <= 2) {
        return 0;
    }
    
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
    
    while (left <= right) {
        if (arr[left] <= arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                totalWater = totalWater + (leftMax - arr[left]);
            }
            left++;
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                totalWater = totalWater + (rightMax - arr[right]);
            }
            right--;
        }
    }
    
    return totalWater;
}

export { trapRainWater };

// console.log(trapRainWater(heights2));
// console.log(trapRainWater(heights1));