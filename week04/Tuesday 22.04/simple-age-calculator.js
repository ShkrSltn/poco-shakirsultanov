const birthYear = prompt("--- Enter your birth year\n");
const futureYear = prompt("--- Enter desired future year\n");

if (birthYear !== null && futureYear !== null) {
    const age1 = futureYear - birthYear;
    const age2 = age1 - 1;
    console.log(`I will be either ${age1} or ${age2} in ${futureYear}`);
}