document.addEventListener('DOMContentLoaded', function() {
    var workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    
    var totalWorkouts = workouts.length;
    var totalCalories = 0;
    
    for (var i = 0; i < workouts.length; i++) {
        // To Convert calories to number before adding
        var calories = Number(workouts[i].calories);
        if (!isNaN(calories)) {
            totalCalories += calories;
        }
    }
    
    document.getElementById('total-workouts').textContent = totalWorkouts;
    document.getElementById('total-calories').textContent = totalCalories;
});