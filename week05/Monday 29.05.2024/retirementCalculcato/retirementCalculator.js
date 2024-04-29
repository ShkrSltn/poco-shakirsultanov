function retirementCalculator() {
    let current_age = prompt("Enter your current age:");
    let retirement_age = prompt("Enter the age you want to retire:");

    if (current_age < 0 || retirement_age < 0) {
        console.log("Please enter a valid age.");
        return;
    } else if (current_age >= retirement_age) {
        console.log("You are already retired.");
        return;
    } else if (isNaN(current_age) || isNaN(retirement_age)) {
        console.log("Please enter a valid number.");
        return;
    }


    let years_left = retirement_age - current_age;
    let current_year = new Date().getFullYear();
    let retirement_year = current_year + years_left;

    if (years_left > 40) {
        console.log("You have a long looooong way to go until retirement.");
        console.log("You can retire in " + retirement_year + ".");
    }
    else if (years_left > 20) {
        console.log("Sorry for you, yo have to work 20 years left until retirement.");
        console.log("You can retire in " + retirement_year + ".");
    }
    else if (years_left < 5) {
        {
            console.log("You are lucky that you have only 5 years left until retirement, are you happy about it?");
            console.log("You can retire in " + retirement_year + ".");
        }

    } else {
        console.log("You have " + years_left + " years left until retirement.");
        console.log("You can retire in " + retirement_year);
    }

}

retirementCalculator();
