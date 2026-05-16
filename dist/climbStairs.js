"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.climbStairs = climbStairs;
function climbStairs(n) {
    let prev2 = 1;
    let prev1 = 2;
    let current = 0;
    if (n <= 2) {
        return n;
    }
    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}
// console.log(climbStairs(5));   Output: 8
// console.log(climbStairs(10));  Output: 89
