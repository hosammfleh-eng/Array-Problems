function climbStairs(n: number): number {
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
export { climbStairs };

// console.log(climbStairs(5));   Output: 8
// console.log(climbStairs(10));  Output: 89