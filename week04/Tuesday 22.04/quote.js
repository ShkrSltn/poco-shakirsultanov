let quote = prompt("--- Please enter a quote\n");
let author = prompt("--- Please enter the author of the quote\n");
if (quote !== null && author !== null) {
    console.log(`${author} says, "${quote}"`);
}