"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canJump = canJump;
function canJump(arr) {
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
// console.log(canJump([3,2,1,1,4])); // Output: True
// console.log(canJump([1, 1, 0, 1]));// Output: false
