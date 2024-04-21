const readline = require('readline');
function readLineSync() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question('', (answer) => {
            resolve(answer);
            rl.close();
        });
    });
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

function parseInput(input) {
    const numbersArray = input.split(',').map(num => parseFloat(num.trim()));
    return numbersArray.filter(num => !isNaN(num));
}


async function main() {
    console.log("Enter a list of numbers separated by commas:(,)\n");
    const userInput = await readLineSync();
    console.log("\nYou entered:", userInput, "\n");
    const inputedNumbers = parseInput(userInput);
    operation()

    async function operation() {
        console.log("Our array:", inputedNumbers, "\n")
        console.log("What you want to do ? (Press enter if you want to close terminal) \n");
        console.log("1: Sort");
        console.log("2: Make sum of all elements");
        console.log("3: Subtract biggest element to the smallest \n");
        //console.log("--------------------------- \n")
        const userInput2 = await readLineSync();

        switch (userInput2) {
            case '1':
                console.log('--------- Sorted array:', bubbleSort(inputedNumbers), "---------\n");
                operation()
                break;
            case '2':
                console.log("\n--------- Summ:", summ(inputedNumbers), "---------\n");
                operation()
                break;
            case '3':
                console.log("\n--------- Subtracted:", substractMinMax(inputedNumbers), "---------\n");
                operation()
                break;


            default:
                break;
        }
        console.log("\n")
    }



}
main()



