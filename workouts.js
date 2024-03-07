fetch("./workouts.json")
.then(response => response.json())
.then(myExcercises => loadExcercises(myExcercises));

sessionStorage.setItem("cals", 0);
function loadExcercises(myExcercises) {
    var CardWorkout = document.getElementById("col");


    


    for (var i = 0; i<myExcercises.workouts.length; i++){
        let card = "card" + i.toString();
        let numReps = 0;
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
        <p id="repPar"> </p>
        

            <br>
            
            
            <div class="d-flex justify-content-between align-items-center">
        
        <small class="text-body-secondary"></small>
        </div>
        </div>
        </div>
        `;
        
        CardWorkout.appendChild(AddCardWorkout);
        
        

  
        
}



}
