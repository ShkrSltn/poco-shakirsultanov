function bubbleSort(arr) {

    const arrLength = arr.length - 1;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength - i; j++) {
            if (arr[j] > arr[j + 1]) {
                /*    let temp = arr[j]; */
                /*    arr[j] = arr[j + 1 */
                /*    arr[j + 1] = temp; */

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr);
}

let array = [2, 6, 4, 1, 8, 3, 6];
bubbleSort(array);