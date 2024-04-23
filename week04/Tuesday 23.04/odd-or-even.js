function oddOrEven() {
    console.log("------------------------------");
    let inputedNumber = prompt("Input any number\n");
    inputedNumber = parseInt(inputedNumber);

    if (inputedNumber !== null) {
        if (inputedNumber % 2 == 0) {
            console.log(`The ${inputedNumber} - is even`);
        }
        else {
            console.log(`The ${inputedNumber} - is odd`);
        }
    }
    else {
        console.log("Invalid input");
    }
    oddOrEven();
}

oddOrEven();
