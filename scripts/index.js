// this will run when the index page loads

document.addEventListener('DOMContentLoaded', function() {
    //this is for getting my workouts from the local storange
    var workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    
    //for counting workouts

    var totalWorkouts = workouts.length;
    var totalCalories = 0;
    
    // to add up all the calories
    for (var i = 0; i < workouts.length; i++) {
        // To Convert calories to number before adding and not string
        var calories = Number(workouts[i].calories);
        if (!isNaN(calories)) {
            totalCalories += calories;
        }
    }
    
    //to show on the webpage
    document.getElementById('total-workouts').textContent = totalWorkouts;
    document.getElementById('total-calories').textContent = totalCalories;
});