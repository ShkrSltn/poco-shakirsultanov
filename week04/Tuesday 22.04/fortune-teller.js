const numberOfChildren = prompt("--- Enter number of children\n");
const partnersName = prompt("--- Enter partners name\n");
const geographicLocation = prompt("--- Enter georaphic location\n");
const jobTitle = prompt("--- Enter job\n");

const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} and will have ${numberOfChildren} kids.`;

console.log(fortune);