function multiplicate(first, second) {
    return first * second;
}

/* console.log(multiplicate(4, 8));
console.log(multiplicate(3, 5));
console.log(multiplicate(8, 8)); */

let breakTheLoop = false;

while (!breakTheLoop) {
    let firstNumber = prompt("Input first digit\n");
    if (firstNumber == "") {
        breakTheLoop = true;
    }
    else {
        let secondNumber = prompt("Input second digit\n");
        if (secondNumber == "") {
            breakTheLoop = true;
        } else {
            console.log(`${firstNumber} * ${secondNumber} = ${multiplicate(firstNumber, secondNumber)}`);
        }
    }
}

console.log("You are out of the console");

//let firstNumber = prompt("Input first digit\n");
//let secondNumber = prompt("Input second digit\n");