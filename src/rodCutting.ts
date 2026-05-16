function rodCutting(price: number[], n: number): number {
    
    const dp: number[] = new Array(n + 1);
    dp[0] = 0;
    
    for (let i = 1; i <= n; i++) {
        let maxValue = -Infinity;
        
        for (let j = 1; j <= i; j++) {
            const currentValue = price[j] + dp[i - j];
            if (currentValue > maxValue) {
                maxValue = currentValue;
            }
        }
        dp[i] = maxValue;
    }
    
    return dp[n];
}
export { rodCutting };

// console.log(rodCutting([0, 1, 5, 8, 9],4));// Output: 10