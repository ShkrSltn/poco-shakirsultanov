let inputedNumbers = [5, 8, 1, -2, 7, 2, 2, 31, -13, 112];

function summ(arr) {
    let sum = 0;
    let arrlength = arr.length
    for (let i = 0; i < arrlength; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Our array", inputedNumbers, "\n");
console.log("Sum of all the elements ", summ(inputedNumbers));


