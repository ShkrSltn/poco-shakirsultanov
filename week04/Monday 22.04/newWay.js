
function checkDate(year, month, day) {
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        return day <= 30;
    } else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return day <= 29;
        } else {
            return day <= 28;
        }
    } else {
        return day <= 31;
    }
}

let birthYear = 2000;
let month = 3;
let day = 31;

let fYear = 2024;
let fMonth = 3;
let fDay = 30;
let age;

if (birthYear > fYear) {
    console.log("Incorrect future date");
} else if (!checkDate(birthYear, month, day) || !checkDate(fYear, fMonth, fDay)) {
    console.log("Incorrect date");
} else {
    if (month > fMonth || (month === fMonth && day < fDay)) {
        age = fYear - birthYear - 1;
    } else {
        age = fYear - birthYear;
    }

    console.log(`I will be ${age} in ${fDay}.${fMonth}.${fYear}`);
}
