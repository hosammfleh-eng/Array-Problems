# Array-Problems
This repository contains solutions to four classic array and dynamic programming problems. Each problem demonstrates a different algorithmic technique, from simple iteration to greedy algorithms and DP optimization.

## 1. Fibonacci Sequence

**Problem Statement**  
The Fibonacci sequence starts with `0` and `1`. Each subsequent number is the sum of the two preceding ones.  
Given `n`, return the `n`-th Fibonacci number.

Input: n = 6
Output: 8
Explanation: Sequence → 0, 1, 1, 2, 3, 5, 8

**Approaches**  
- Recursive (slow, exponential time)  
- Iterative with memoization (O(n) time, O(1) space)  
- Matrix exponentiation (O(log n) time)

---

## 2. Trapping Rain Water

**Problem Statement**  
Given an array `height` where each element represents the height of a building (bar), compute how much water can be trapped between buildings after rain. Water gets trapped in depressions (valleys).



Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: Water trapped between bars.

**Approaches**  
- Brute force: for each index, find left max and right max → O(n²)  
- Precomputed left/right max arrays → O(n) time, O(n) space  
- Two pointers (most optimal) → O(n) time, O(1) space

---

## 3. Jump Game

**Problem Statement**  
You are given an array of non-negative integers. Each element represents your maximum jump length from that position. Start at index `0`. Determine if you can reach the last index.

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step to index 1, then 3 steps to last index.

**Approaches**  
- Greedy: keep track of the farthest reachable index → O(n) time, O(1) space  
- Backtracking / DFS (less efficient, O(n²))

---

## 4. Rod Cutting Problem

**Problem Statement**  
Given a rod of length `n` and an array `price` where `price[i]` is the profit from selling a piece of length `i+1`, cut the rod into pieces (or leave it whole) to maximize total profit.


Input: n = 4, price = [1, 5, 8, 9]
Output: 10
Explanation: Cut into 2 + 2 pieces → 5 + 5 = 10


**Approaches**  
- Recursive (exponential)  
- Top-down memoization (DP)  
- Bottom-up DP → O(n²) time, O(n) space  
- Unbounded knapsack style solution

---

## Complexity Summary

| Problem               | Best Time | Best Space | Technique       |
|-----------------------|-----------|------------|----------------|
| Fibonacci             | O(n)      | O(1)       | Iteration       |
| Trapping Rain Water   | O(n)      | O(1)       | Two Pointers    |
| Jump Game             | O(n)      | O(1)       | Greedy          |
| Rod Cutting           | O(n²)     | O(n)       | Dynamic Program.|



# Flood Fill (DFS Solution)

## Problem Statement

You are given:
- A 2D grid `image` representing pixel colors (integers)
- A starting pixel at `(sr, sc)` (row, column)
- A `newColor` to fill with

**Task:** Start from the given pixel and change its color to `newColor`. Then move to all **neighbors (up, down, left, right)** that have the **same original color** and change them too. Continue until the entire connected region is filled.

This is exactly how the **"paint bucket"** tool works in image editors like MS Paint or Photoshop.


Original Image: Starting pixel (1,1) = 1
[1, 1, 1] New Color = 2
[1, 1, 0]
[1, 0, 1]



# Largest Rectangle in Binary Matrix

## Problem Statement

Given a 2D binary matrix `mat[][]` consisting only of **0s** and **1s**, find the **area of the largest rectangle sub-matrix** that contains **only 1s**.

**Constraints:**
- Matrix size: up to 1000 × 1000
- Values: only 0 or 1
- Rectangle must be contiguous (sub-matrix)

[
[1, 0, 1, 0, 0],
[1, 0, 1, 1, 1],
[1, 1, 1, 1, 1],
[1, 0, 0, 1, 0]
];

Row 1: [1, 1, 1] (columns 2-4)
Row 2: [1, 1, 1] (columns 2-4)
Area = 3 columns × 2 rows = 6



# Largest Rectangle in Histogram

## Problem Statement

Given an array of integers `heights` representing the heights of bars in a histogram, find the **largest rectangular area** possible. All bars have the same width (assumed to be **1 unit**).

**Key Point:** The rectangle must be **contiguous** (made of consecutive bars) and can span multiple bars, but its height is limited by the **shortest bar** in that range.


