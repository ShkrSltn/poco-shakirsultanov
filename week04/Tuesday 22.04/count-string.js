let inputStr = prompt("Please enter string\n");
let quantityOfChar = 0;
if (inputStr !== null) {
    for (let i = 0; i < inputStr.length; i++) {

        if (inputStr[i] !== " ") {
            quantityOfChar++;
            console.log(inputStr[i], "Number:", quantityOfChar);
        }

    }

}
console.log("Quantity of the charachters", quantityOfChar);