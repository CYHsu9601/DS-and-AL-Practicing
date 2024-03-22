// Cartesian Product
//!!! O(n*m), which n => arr1.length, m => arr2.length
function cartesianProduct(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}
// let arr1 = [1, 2];
// let arr2 = [3, 4, 5];

// console.log(cartesianProduct(arr1, arr2));

// Climbing Staircase
function climbingStaircase(n) {
    // f(n) = f(n-1) + f(n-2)
    // can only climb 1 step || 2 steps

    // way 1: O(2ⁿ)
    // if (n < 1) {
    //     return;
    // }
    // else if (n === 1) {
    //     return 1;
    // }
    // else if (n === 2) {
    //     return 2;
    // }
    // else {
    //     return climbingStaircase(n - 1) + climbingStaircase(n - 2);
    // }

    // way 2: O(n)
    const noOfWays = [1, 2];
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n - 1];
}

// Tower of Hanoi
// | | |
// A͇ B͇ C͇
// O(2ⁿ) --> execute 2ⁿ-1 times
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n < 1) {
        return;
    }
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    // move (n-1) disks from rod 'A' to rod 'B' using rod 'C'
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    // move the bottom(larger) disk from rod 'A' to rod 'C' 
    //for (let i = 2; i <= n; i++) {
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    //}
    // shift (n-1) disks from rod 'B' to rod 'C' using rod 'A'
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'C', 'B');

