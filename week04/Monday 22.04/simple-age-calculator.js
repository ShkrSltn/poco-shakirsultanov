//const prompt = require('prompt-sync')();

function ageCalculator() {
    /*  const birthYear = prompt("--- Enter your birth year\n");
     const month = (prompt("--- Enter your birth month\n"));
     const day = (prompt("--- Enter your birth day\n"));
 
     const fYear = prompt("--- Enter future year\n");
     const fMonth = (prompt("--- Enter future month\n"));
     const fDay = (prompt("--- Enter future day\n")); */

    const birthDate = prompt(`--- Enter birth date din format like : "31.03.2000" \n`);
    const futureDate = prompt(`--- Enter future date din format like : "25.07.2039"\n`);

    let bDateParts = birthDate.split(".");
    let fDateParts = futureDate.split(".");

    let day = parseInt(bDateParts[0]);
    let month = parseInt(bDateParts[1]);;
    let birthYear = parseInt(bDateParts[2]);;

    const fDay = parseInt(fDateParts[0]);
    const fMonth = parseInt(fDateParts[1]);
    const fYear = parseInt(fDateParts[2]);
    /*  const birthYear = 2000;
        const month = 3;
        const day = 31;
    
        const fYear = 2024;
        const fMonth = 3;
        const fDay = 29; */

    let age = 0;

    if (month > fMonth || (month == fMonth && day > fDay)) {
        age = fYear - birthYear - 1;

    } else {
        age = fYear - birthYear;
    }

    if (birthYear > fYear) {
        console.log("Inputed wrong future year");
    }

    if (birthYear !== null && fYear !== null && checkDate(day, month, birthYear) && checkDate(fDay, fMonth, fYear)) {
        console.log(`You will be ${age} in ${fDay}.${fMonth}.${fYear}`);
    }
    else {
        console.log("Inputed wrong date");
    }
}

ageCalculator();


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkDate(day, month, year) {
    let iDay = parseInt(day);
    let iMonth = parseInt(month);
    let iYear = parseInt(year);

    if (isLeapYear(iYear) && iMonth == 2 && iDay > 29) {
        return false;
    }

    if (iDay <= 0 || iDay > 31) {
        return false;
    }

    if (iMonth <= 0 || iMonth > 12) {
        return false;
    }

    if (iYear < 0 || iYear > 2100) {
        return false;
    }

    return true;
}