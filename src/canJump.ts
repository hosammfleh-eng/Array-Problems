function canJump(arr: number[]): boolean {
    let maxReach = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i > maxReach) {
            return false;
        }
        
        const currentReach = i + arr[i];
        if (currentReach > maxReach) {
            maxReach = currentReach;
        }
        
        if (maxReach >= arr.length - 1) {
            return true;
        }
    }
    
    return true;
}
export { canJump };

// console.log(canJump([3,2,1,1,4])); // Output: True
// console.log(canJump([1, 1, 0, 1]));// Output: false