console.log("------------------------------");
let inputedQuantity = prompt("Input quantity of numbers\n");
inputedQuantity = parseInt(inputedQuantity);
oddOrEven(inputedQuantity);

function oddOrEven(nQuantity) {
    for (let i = 0; i <= nQuantity; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is even`);
        }
        else {
            console.log(`${i} is odd`);
        }
    }
}
