// Fibonacci Sequence
// O[n]
function fibonacci(n) {
    // const arr = [];
    // if (n <= 0) {
    //     return;
    // }
    // else {
    //     for (let i = 0; i < n; i++) {
    //         if (i === 0) {
    //             arr.push(i);
    //         }
    //         else if (i === 1) {
    //             arr.push(i);
    //         }
    //         else {
    //             arr.push((arr[i - 2] + arr[i - 1]));
    //         }
    //     }
    // }
    // return arr;
    if (n <= 0) {
        return [];
    }
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}

// Factorial of a Number
// O(n)
function factorial(n) {
    if (n < 0) {
        return 0;
    }
    else {
        // 不須寫!!! ∵ n<i 不會進入for迴圈
        // if (n === 0) {
        //     return 1;
        // }
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Prime Number 
function isPrime(n) {
    // 加入邊界條件
    // 1不是質數
    if (i <= 1) {
        return false;
    }
    // Way 1: O(n)
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    // 優化版 Way 2: O(sqrt(n))
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

// Power of Two
// O(logn)
function isPowerOfTwo(n) {
    if (n < 1)
        return false;
    // for (let i = 0; i < n; i++) {
    //     let result = n / Math.pow(2, i);
    //     if (result === 1)
    //         return true;
    // }

    // better solution 
    // O(logn)
    // while (n > 1) {
    //     if (n % 2 !== 0) {
    //         return false;
    //     } else {
    //         n /= 2; // 
    //     }
    // }
    // return true;

    // the best solution !! Bitwise solution 只能用在2的n次方
    // 如果是2的n次方，一定是 10000....
    // O(1) 
    return (n & (n - 1)) === 0;
}
let n = 10;
console.log(n + " is a power of 2: " + isPowerOfTwo(n));
