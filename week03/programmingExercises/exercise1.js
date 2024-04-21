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
    return arr;
}


let array = [];
for (let i = 0; i < 1000; i++) {
    array.push(Math.floor(Math.random() * 2001) - 1000);
}

console.log(bubbleSort(array));

