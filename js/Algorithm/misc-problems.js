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
// O()
function climbingStaircase(n) {
    
}


console.log(climbingStaircase(5));

