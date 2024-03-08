let sex;

function calculateSuggestedIntake() {
    const weight = parseFloat(document.getElementById('weight').value);
    const inch = parseInt(document.getElementById('in').value);
    const ft = parseFloat(document.getElementById('ft').value);
    const age = parseInt(document.getElementById('age').value);

    const height = (ft * 12) + inch; //get total inches

    weight *= 0.45359237; //convert to kg
    height *= 2.54; //convert to cm
    let suggestedIntake = 0.0;

    if(sex == "male"){
        suggestedIntake = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    }
    else if(sex == 'female'){
        suggestedIntake = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }

    const intakeDisplay = document.getElementById('suggestedIntake');
    intakeDisplay.textContent = `${suggestedIntake.toFixed(2)} calories/day`;
}

function calculateCaloriesLeft() {
    const goal = parseFloat(document.getElementById('goal').value);
    const foodCalories = parseFloat(document.getElementById('foodCalories').value);

    const caloriesLeft = goal - foodCalories;

    const caloriesLeftDisplay = document.getElementById('caloriesLeft');
    caloriesLeftDisplay.textContent = `${caloriesLeft.toFixed(2)} calories left today`;
}

document.getElementById('genderSelect').addEventListener('change', function() {
    sex = this.value;
    console.log(sex);
});