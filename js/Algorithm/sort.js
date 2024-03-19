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
        if (arr[i] <= pivot) {
            leftArr.push(arr[i]);
        }
        else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}


// execute
let array = [-6, 2, 8, 20, 4, 1];
quickSort(array)
console.log(array);

