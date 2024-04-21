function returnDaysByLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 1;
    } else {
        return 0;
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = 2024;
const daysInYear = returnDaysByLeapYear(year);

console.log(`${year} have ${daysInYear} days in year.`);


const readline = require('readline');
function readLineSync() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question('', (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

function checkDate(day, month, year) {
    let iDay = parseInt(day);
    let iMonth = parseInt(month);
    let iYear = parseInt(year);

    if (isLeapYear(iYear) && month == 2 && iDay > 29) {
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



function whatDayIs(day, month, year) {
    const daysInMonth = [31, 28 + returnDaysByLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dayOfYear = parseInt(day);
    for (let i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }

    return dayOfYear;
}


async function main() {
    console.log("Enter day");
    const day = await readLineSync();
    console.log("Enter month");
    const month = await readLineSync();
    console.log("Enter year");
    const year = await readLineSync();

    if (checkDate(day, month, year) != true) {
        console.log("Achtung! You put wrong date");
    }
    else {
        console.log(`Inputed date ${day}.${month}.${year}`);
        const dayNumber = whatDayIs(day, month, year);
        console.log(`День в году:${dayNumber}`)
    }

}

main();