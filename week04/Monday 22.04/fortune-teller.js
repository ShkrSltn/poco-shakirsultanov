/* const numberOfChildren = prompt("--- Enter number of children\n");
/* const partnersName = prompt("--- Enter partners name\n");
const geographicLocation = prompt("--- Enter georaphic location\n");
const jobTitle = prompt("--- Enter job\n"); */

function randomGet(min, max) {
    return Math.floor((Math.random() * max) + min);
}

let numberOfChildren, partnersName, geographicLocation, jobTitle;

numberOfChildren = [0, 1, 2, 3, 4, 5, 6];
partnersName = ["Evelyn", "Marcus", "Stella", "Nathan", "Zoe", "Lucas", "Olivia", "Derek", "Maya", "Xavier"];
countries = [
    "United States",
    "Japan",
    "France",
    "Australia",
    "Brazil",
    "South Africa",
    "United Arab Emirates",
    "Italy",
    "Ukraine",
    "Canada"];

jobTitle = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
    "Sales Representative",
    "Marketing Specialist",
    "Financial Analyst",
    "Human Resources Manager",
    "Operations Manager",
    "Customer Support Specialist"
];

const randomJob = jobTitle[randomGet(0, jobTitle.length)];
const randomCountry = countries[randomGet(0, countries.length)];
const randomName = partnersName[randomGet(0, partnersName.length)];
const randomChildren = numberOfChildren[randomGet(0, numberOfChildren.length)];


let fortune = `You will be a ${randomJob} in ${randomCountry}, and married to ${randomName} and will have ${randomChildren}`;

if (randomChildren == 0) {
    fortune += " no kids.";
}
else if (randomChildren == 1) {
    fortune += " kid.";
}
else {
    fortune += " kids.";
}
console.log(fortune);