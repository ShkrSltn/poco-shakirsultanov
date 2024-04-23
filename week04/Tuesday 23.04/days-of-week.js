function returnTranslateDay(day) {
    switch (day) {
        case 'Monday':
            return "Pazartesi";
        case 'Tuesday':
            return "Sali";
        case 'Wednesday':
            return "Carsamba";
        case 'Thursday':
            return "Persembe";
        case 'Friday':
            return "Cuma";
        case 'Saturday':
            return "Cumartesi";
        case 'Sunday':
            return "Pazar";
        default:
            return "Invalid day";
    }
}

function displayTranslateDay(day) {

    switch (day) {
        case 'Monday':
            console.log("Pazartesi");
            break;
        case 'Tuesday':
            console.log("Sali");
            break;
        case 'Wednesday':
            console.log("Carsamba");
            break;
        case 'Thursday':
            console.log("Persembe");
            break;
        case 'Friday':
            console.log("Cuma");
            break;
        case 'Saturday':
            console.log("Cumartesi");
            break;
        case 'Sunday':
            console.log("Pazar");
            break;

        default:
            console.log("Invalid day");
    }
}

let continueTheLoop = true;
while (continueTheLoop) {
    let inputedDay = prompt("--- Please enter day\n");
    let translatedDay = returnTranslateDay(inputedDay);
    if (translatedDay === "Invalid day") {
        continueTheLoop = false;

    } else {
        console.log("Tanslation:", translatedDay);
    }

}
console.log("You are exit the translator");





