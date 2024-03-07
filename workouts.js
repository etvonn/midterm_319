fetch("./workouts.json")
.then(response => response.json())
.then(myExcercises => loadExcercises(myExcercises));


function loadExcercises(myExcercises) {
    var CardWorkout = document.getElementById("col");
    var inputCount = [];
    var cards = [];


    


    for (var i = 0; i<myExcercises.workouts.length; i++){
        let card = "card" + i.toString();
        let numbox ="numbox" + i.toString();
        let name = myExcercises.workouts[i].name;
        let calories = myExcercises.workouts[i].calories;
        let unit = myExcercises.workouts[i].unit;
        let url = myExcercises.workouts[i].url;

        let AddCardWorkout = document.createElement("div");
        

        AddCardWorkout.classList.add("col");
        AddCardWorkout.innerHTML = `
        <div id=${card} class="card shadow-sm">
        
        

        <div class="card shadow-sm">
        <img src=${url} class="card-img-top" alt="..."></img>
        <div class="card-body">
        <form id="my_form">
        <p class="card-text"> <strong>${name}</strong>, ${calories} Calories per ${unit}<br><br>
        <input type="number" name="inputReps" value="0">
            <button type="button" onclick="addInputValue(name,calories,unit,inputReps);">Add</button></p>
            <div class="d-flex justify-content-between align-items-center">
        
        <small class="text-body-secondary"></small>
        </div>
        </div>
        </div>
        `;
        CardWorkout.appendChild(AddCardWorkout);
        
        let ccard = document.getElementById(card);
        cards.push(ccard);
        cards[index].style.display = 'block';

        console.log(checkbox);
console.log(card);
    }
    console.log(checkboxes);
console.log(cards);
    
    
}


function addInputValue(name,calories,unit,inputReps) {
    let summaryDiv = document.querySelector('summary');
    let AddToSummary = document.createElement("div");
    AddToSummary.innerHTML = `
    
    <div>
      <h6 class="my-0">${name}</h6>
      <small class="text-body-secondary">${calories} per ${unit}</small>
    </div><span class="text-body-secondary">${calories*inputReps}</span>
 
    
    `;
    
    summaryDiv.appendChild(AddToSummary);
}