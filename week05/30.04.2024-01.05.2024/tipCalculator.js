let billAmount = 0;
let tip = 0;
let tipRate = 0;
let totalAmount = 0;


billAmount = Number(prompt("Enter the bill amount \n"));
tipRate = Number(prompt("What is your tip rate ? \n"));

tip = billAmount * tipRate / 100;
console.log("Before " + tip);
tip = Math.round(tip * 20) / 20; //

totalAmount = billAmount + tip;

console.log(`Tip CHF : ${tip}`);
console.log(`Total amount : CHF ${totalAmount}`);

