// Fibonacci Sequence
// Iterative Version: O(n)
// Recursive Version: O(2ⁿ)
function recursiveFibonacci(n) {
    if (n < 0) {
        return;
    }
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    else {
        return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
    }
}


// Factorial of a Number
// Iterative Version: O(n)
// Recursive Version: O(n)
function recursiveFactorial(n) {
    if (n < 0) {
        return;
    }
    if (n === 0) {
        return 1;
    } else {
        return n * recursiveFactorial(n - 1);
    }
}
console.log(recursiveFactorial(4));

