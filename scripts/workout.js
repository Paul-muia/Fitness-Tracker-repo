document.addEventListener('DOMContentLoaded', function() {
    var workoutForm = document.getElementById('workout-form');
    
    workoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var workoutType = document.getElementById('workout-type').value;
        var duration = document.getElementById('duration').value;
        var calories = document.getElementById('calories').value;
        
        if (!workoutType || !duration || !calories) {
            alert('Please fill in all fields');
            return;
        }
        
        var workout = {
            type: workoutType,
            duration: parseInt(duration),
            calories: parseInt(calories),
            date: new Date()
        };
        
        var workouts = JSON.parse(localStorage.getItem('workouts')) || [];
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
        
        workoutForm.reset();
        alert('Workout logged successfully!');
        window.location.href = 'progress.html';
    });
});