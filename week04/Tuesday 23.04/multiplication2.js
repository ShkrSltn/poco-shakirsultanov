function multiplicate(number) {

    return number * 9;
}
/* let gNumber = prompt("Input number\n");
console.log(`${gNumber} * 9 = ${multiplicate(gNumber)}`); */

function multiplicateInLoop(quantity) {

    for (let i = 0; i <= quantity; i++) {
        console.log(`${i} * 9 = ${i * 9}`);
    }
}

let gQuantity = prompt("Input quantity of multiplication numbers\n");
multiplicateInLoop(gQuantity);
