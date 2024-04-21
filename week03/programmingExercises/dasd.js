// Define a variable with a value that will be used for comparison
const dayOfWeek = 'Monday';

// Use a switch statement to perform different actions based on the value of dayOfWeek

function choose() {
    console.log("Hello user, you already give us the numbers, what operation you want to execute");
    console.log("1: Sort");
    console.log("2: Make sum of all elements");
    console.log("3: Subtract biggest element to the smallest ");

    switch (operation) {
        case '1':
            console.log('Inputed Numbers Array:', inputedNumbers);
            break;
        case '2':
            console.log("Sorted array: " + bubbleSort(inputedNumbers));
            break;
        case '3':
            console.log("Summ: " + summ(inputedNumbers));
            break;

        default:
            console.log('You didnt give us instructions');
            break;
    }
}


rl.question('Enter a list of numbers separated by commas: ', (input) => {
    const inputedNumbers = parseInput(input);

    //console.log("Array: " + inputedNumbers);
    console.log('Inputed Numbers Array:', inputedNumbers);
    console.log("Sorted array: " + bubbleSort(inputedNumbers));
    console.log("Summ: " + summ(inputedNumbers));
    console.log("Substract max element to min element: " + substractMinMax(inputedNumbers));

    rl.close();
});







console.log("Substract max element to min element: " + substractMinMax(inputedNumbers));



//let inputedNumbers = [5, 8, 1, -2, 7, 2, 2, 31, -13, 112];

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

function summ(arr) {
    let sum = 0;
    let arrlength = arr.length
    for (let i = 0; i < arrlength; i++) {
        sum += arr[i];
    }
    return sum;
}

function substractMinMax(arr) {

    let sArr = bubbleSort(arr);
    return sArr[sArr.length - 1] - arr[0];

}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parseInput(input) {
    const numbersArray = input.split(',').map(num => parseFloat(num.trim()));
    return numbersArray.filter(num => !isNaN(num));
}

let outerVar = "empty";
rl.question('Enter a list of numbers separated by commas: ', (input) => {
    const inputedNumbers = parseInput(input);
    outerVar = inputedNumbers;
    //console.log("Array: " + inputedNumbers);
    console.log('Inputed Numbers Array:', inputedNumbers);
    console.log("Sorted array: " + bubbleSort(inputedNumbers));
    console.log("Summ: " + summ(inputedNumbers));
    console.log("Substract max element to min element: " + substractMinMax(inputedNumbers));

    rl.close();
});

async function blub() {
    const answer = await new Promise(resolve => {
        rl.question("What is your name? ", resolve)
    });
    console.log(answer);
}
blub();
console.log("test");
console.log(outerVar);





