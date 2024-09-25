console.log('Script is running');

function generateAISchedule(weight, height, goals) {
    console.log('Generating schedule for:', { weight, height, goals });
    const bmi = calculateBMI(weight, height);
    const intensity = determineIntensity(bmi, goals);
    const workoutTypes = ['Cardio', 'Strength Training', 'Yoga', 'HIIT', 'Recovery'];
    const schedule = [];

    for (let i = 0; i < 7; i++) {
        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][i];
        const workout = workoutTypes[Math.floor(Math.random() * workoutTypes.length)];
        const duration = Math.floor(Math.random() * (60 - 30 + 1) + 30); // Random duration between 30-60 minutes
        schedule.push(`${day}: ${workout} - ${duration} minutes (Intensity: ${intensity})`);
    }

    console.log('Generated schedule:', schedule);
    return schedule;
}

function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(1);
}

function determineIntensity(bmi, goals) {
    if (bmi < 18.5 || bmi > 30) return 'Low';
    if (goals.toLowerCase().includes('lose weight')) return 'High';
    if (goals.toLowerCase().includes('muscle')) return 'Medium-High';
    return 'Medium';
}

document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    console.log('Form submitted');
    e.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const goals = document.getElementById('goals').value;
    
    console.log('User Info:', { weight, height, goals });
    
    // Generate AI schedule
    const schedule = generateAISchedule(weight, height, goals);
    
    // Display the schedule
    const scheduleContent = document.getElementById('scheduleContent');
    scheduleContent.innerHTML = schedule.map(day => `<p>${day}</p>`).join('');
    console.log('Schedule displayed');
    
    // Show workout tracker and schedule sections
    document.getElementById('workoutTracker').style.display = 'block';
    document.getElementById('schedule').style.display = 'block';
});

document.getElementById('addWorkout').addEventListener('click', function() {
    console.log('Add workout clicked');
    const workoutName = document.getElementById('workoutName').value;
    const duration = document.getElementById('duration').value;
    
    if (workoutName && duration) {
        const workoutList = document.getElementById('workoutList');
        const li = document.createElement('li');
        li.textContent = `${workoutName} - ${duration} minutes`;
        workoutList.appendChild(li);
        
        // Clear input fields
        document.getElementById('workoutName').value = '';
        document.getElementById('duration').value = '';
        console.log('Workout added');
    }
});