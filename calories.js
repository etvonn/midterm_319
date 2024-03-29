
fetch('calories.json')
    .then(response => response.json())
    .then(data => {const imageGallery = document.getElementById('imageGallery');

    data.images.forEach(image => {
        const container = document.createElement('div');
        const img = document.createElement('img');
        img.src = image.url;
        img.width = 300;

        const description = document.createElement('p');
        description.textContent = `Figure ${image.id}: ${image.description}`;

        const link = document.createElement('a');
        link.href = image.link;
        link.target = "_blank";
        link.textContent = image.title;
        link.style.textDecoration = "none";
        link.style.color = "#0d6efd"

        container.appendChild(img);
        container.appendChild(description);
        container.appendChild(link);

        imageGallery.appendChild(container);
    });
})


let suggestedIntake = 0.0;

function calculateSuggestedIntake() {
    let weight = parseFloat(document.getElementById('weight').value);
    const inch = parseInt(document.getElementById('inch').value);
    const ft = parseFloat(document.getElementById('foot').value);
    const age = parseInt(document.getElementById('age').value);
    let sex = document.getElementById('genderSelect').value;

    document.getElementById('genderSelect').addEventListener('change', function() {
        sex = this.value;
    });

    console.log(`Weight (lb): ${weight}`);
    console.log(`Height (ft, in): ${ft}'${inch}"`);
    console.log(`Age: ${age}`);
    console.log(`Sex: ${sex}`);

    let height = (ft * 12) + inch; //get total inches

    weight *= 0.45359237; //convert to kg
    height *= 2.54; //convert to cm
    suggestedIntake = 0.0;

    if(sex == 1){ //male formula
        suggestedIntake = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    }
    else if(sex == 2){ //female formula
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

function setGoalAsBMR(){
    if(suggestedIntake > 0){
        const input = document.getElementById('goal');

        input.value = suggestedIntake.toFixed(2);
    }
}


