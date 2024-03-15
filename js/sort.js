// Bubble Sort
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




// execute
let array = [-6, 15, 8, 20, 4, 1];
bubbleSort(array)
console.log(array);

