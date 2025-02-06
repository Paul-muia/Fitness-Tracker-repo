//to show all my workout history when page loads
document.addEventListener('DOMContentLoaded', function() {
    
    //find where we will put the table
    var workoutHistoryElement = document.getElementById('workout-history');
    
    //get my savd workouts from storage
    var workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    
    //to check if i have any workouts
    if (workouts.length === 0) {
        
        //if there is no workout show the message
        workoutHistoryElement.innerHTML = '<p>No workouts logged yet. Start tracking your fitness!</p>';
    } else { 
        
        //if there is workout start creating a table
        var table = '<table border="1">';
        table += '<tr><th>Date</th><th>Workout Type</th><th>Duration (mins)</th><th>Calories</th></tr>';
        
        
        //ti loop through the workouts to add a row to the btable
        for (var i = 0; i < workouts.length; i++) {
            var workout = workouts[i];
            var date = new Date(workout.date).toLocaleDateString();//to make the date look nice
            //add each row
            table += '<tr>';
            table += '<td>' + date + '</td>';
            table += '<td>' + workout.type + '</td>';
            table += '<td>' + workout.duration + '</td>';
            table += '<td>' + workout.calories + '</td>';
            table += '</tr>';
        }
        
        table += '</table>';
        // put table on the page
        workoutHistoryElement.innerHTML = table;
    }
});