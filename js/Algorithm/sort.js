// Bubble Sort
// ascending sorting
// O(n²)
function bubbleSort(arr) {
    // way 1 for loop:
    for (let j = arr.length; j > 0; j--) {
        let hasSwap = false;
        for (let i = 0; i < j - 1; i++) {   // 最後一個數只到 arr.length-2 (i+1)
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                hasSwap = true;
            }
        }
        if (!hasSwap) {
            return;
        }
    }

    // way 2 do while:
    // let swapped;
    // do {
    //     swapped = false;
    //     for (let i = 0; i < arr.length - 1; i++) {   // 最後一個數只到 arr.length-2 (i+1)
    //         if (arr[i] > arr[i + 1]) {
    //             let temp = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = temp;
    //             swapped = true;
    //         }
    //     }
    // }
    // while (swapped)
}

// Insertion Sort
// ascending sorting
// O(n²)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {  // 第一個數視為已排列
        let numberToInsert = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (numberToInsert < arr[j]) {
                arr[j + 1] = arr[j];
            }
            else {
                arr[j + 1] = numberToInsert;
                break;
            }
        }
    }
}

// Quick Sort
// ascending sorting
// worst case: O(n²) -> 已經排序好的，每次切都是[],[n-1元素]，需比n-1輪，每次都需遍歷n個元素去跟pivot比大小
// average: O(nlogn) -> 左右邊數量差不多，大約切一半，需logn輪，每次都需遍歷n個元素去跟pivot比大小
function quickSort(arr) {
    // base condition: sub arrays only contain 0 or 1 element
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];    // set the last element of the array as the pivot
    let leftArr = [];
    let rightArr = [];
    // split
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        }
        else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Lomuto partition scheme 
// 空間複雜度低，不須配置left, right sub array
function quickSortLomuto(arr, startIndex, endIndex) {
    if (startIndex < endIndex) {
        let pivotNewPlace = quickSortPartition(arr, startIndex, endIndex);  // 1st partition
        quickSortLomuto(arr, startIndex, pivotNewPlace - 1); // left sub array
        quickSortLomuto(arr, pivotNewPlace + 1, endIndex); // right sub array
    }
}
// partition 
function quickSortPartition(arr, startIndex, endIndex) {
    let pivot = endIndex;
    let nextChangePlace = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
        if (arr[i] < pivot) {
            [arr[i], arr[nextChangePlace]] = [arr[nextChangePlace], arr[i]]; // swap using destructuring(ES6)
            nextChangePlace++;
        }
    }
    [arr[pivot], arr[nextChangePlace]] = [arr[nextChangePlace], arr[pivot]]; // swap the pivot and nextChangePlace to make the pivot in the middle of the arr
    return nextChangePlace;
}
// quickSortLomuto(array, 0, array.length - 1);

// Merge Sort
// ascending sorting
// O(nlogn) 
function mergeSort(arr) {
    // debugger;
    // base case
    if (arr.length < 2) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    // length of the left and right arrary are the same
    let sortedArr = [];
    // max comparision times: leftArr.length + rightArr.length
    let maxComparision = leftArr.length + rightArr.length;
    for (let i = 0; i <= maxComparision; i++) {         // -> execute n times
        if (leftArr.length === 0) {
            sortedArr = sortedArr.concat(rightArr);
            break;
        }
        else if (rightArr.length === 0) {
            sortedArr = sortedArr.concat(leftArr);
            break;
        }
        else {
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                leftArr.splice(0, 1);
            }
            else {
                sortedArr.push(rightArr[0]);
                rightArr.splice(0, 1);
            }
        }
    }
    return sortedArr;

    // shorter way 
    // while (leftArr.length !== 0 && rightArr.length !== 0) {
    //     if (leftArr[0] <= rightArr[0]) {
    //         // shift(): 移除第一個陣列值，同時會將移除的值回傳
    //         sortedArr.push(leftArr.shift());
    //     }
    //     else {
    //         sortedArr.push(rightArr.shift());
    //     }
    // }
    // return [...sortedArr, ...leftArr, ...rightArr];
}


// execute
var array = [-6, 2, 8, 20, 4, 1];

console.log(mergeSort(array));

