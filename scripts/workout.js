// supposed to run when workout page loads

document.addEventListener('DOMContentLoaded', function() {

    // to get my form from 
    var workoutForm = document.getElementById('workout-form');

    // when the form is submitted do the following staffs
    
    workoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // to get all the values from the form inputs
        var workoutType = document.getElementById('workout-type').value;
        var duration = document.getElementById('duration').value;
        var calories = document.getElementById('calories').value;
        // to check and make sure everything if the user has filled everthing
        if (!workoutType || !duration || !calories) {
            alert('Please fill in all fields');
            return;
        }
        //making the workout object to store workout information
        var workout = {
            type: workoutType,
            duration: parseInt(duration),
            calories: parseInt(calories),
            date: new Date()
        };
        // getting old workouts and adding new ones
        var workouts = JSON.parse(localStorage.getItem('workouts')) || [];
        workouts.push(workout);

        //to save everything back
        localStorage.setItem('workouts', JSON.stringify(workouts));
        
        //to clear foarm and show message and going back to progress tracker
        workoutForm.reset();
        alert('Workout logged successfully!');
        window.location.href = 'progress.html';
    });
});