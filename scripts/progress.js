document.addEventListener('DOMContentLoaded', function() {
    var workoutHistoryElement = document.getElementById('workout-history');
    var workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    
    if (workouts.length === 0) {
        workoutHistoryElement.innerHTML = '<p>No workouts logged yet. Start tracking your fitness!</p>';
    } else {
        var table = '<table border="1">';
        table += '<tr><th>Date</th><th>Workout Type</th><th>Duration (mins)</th><th>Calories</th></tr>';
        
        for (var i = 0; i < workouts.length; i++) {
            var workout = workouts[i];
            var date = new Date(workout.date).toLocaleDateString();
            table += '<tr>';
            table += '<td>' + date + '</td>';
            table += '<td>' + workout.type + '</td>';
            table += '<td>' + workout.duration + '</td>';
            table += '<td>' + workout.calories + '</td>';
            table += '</tr>';
        }
        
        table += '</table>';
        workoutHistoryElement.innerHTML = table;
    }
});