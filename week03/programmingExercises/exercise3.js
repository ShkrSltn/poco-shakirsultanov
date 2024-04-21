function substractMinMax(arr) {

    let sArr = bubbleSort(arr);
    return sArr[sArr.length - 1] - arr[0];

}

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

let inputedNumbers = [5, 8, 1, -2, 7, 2, 2, 31, -13, 112];
console.log("Our array", inputedNumbers, "\n");
console.log("Subtraction of the smallest element and the biggest", substractMinMax(inputedNumbers));