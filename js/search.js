// Linear Search
// O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


// Binary Search
// Iterative Version: O(logn) --> always divided by 2
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2); // always use the lesser one
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1; // middleIndex 已經比過，不須再比
        }
        else {
            leftIndexIndex = middleIndex + 1;
        }
    }
    return -1;
}

// Binary Search
// Recursive Version: O(logn)
function recursiveBinarySearch(arr, target) {
    return subBinarySearch(arr, target, 0, arr.length - 1);
}

function subBinarySearch(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
        return middleIndex;
    } else if (arr[middleIndex] > target) {
        return subBinarySearch(arr, target, leftIndex, middleIndex - 1);
    } else {
        return subBinarySearch(arr, target, middleIndex + 1, rightIndex);
    }
}


// execute
let array = [3, 10, 12, 45];
console.log(recursiveBinarySearch(array, 1000));

