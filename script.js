document.addEventListener("DOMContentLoaded", () => {
    const workoutDiv = document.querySelector(".workout");
    const button = document.querySelector("button");
    const startRunButton = document.createElement('button');
    startRunButton.textContent = 'Start Run';
    const stopRunButton = document.createElement('button');
    stopRunButton.textContent = 'Stop Run';
    const runTimeDiv = document.createElement('div');
    const currentTimeDiv = document.createElement('div');
    let runTime;
    let intervalId;

    // Append the Start Run and Stop Run buttons, and the run time divs to the body
    document.body.append(startRunButton, stopRunButton, runTimeDiv, currentTimeDiv);

    // Load the last run time from the localStorage
    const lastRunTime = localStorage.getItem('runTime');
    if (lastRunTime) {
        runTimeDiv.textContent = `Last Run Time: ${lastRunTime} seconds`;
    }

    startRunButton.addEventListener('click', () => {
        let seconds = 0;
        intervalId = setInterval(() => {
            seconds++;
            runTime = seconds;
            currentTimeDiv.textContent = `Current Run Time: ${runTime} seconds`;
        }, 1000);
    });

    stopRunButton.addEventListener('click', () => {
        clearInterval(intervalId);
        localStorage.setItem('runTime', runTime);
        runTimeDiv.textContent = `Last Run Time: ${runTime} seconds`;
    });

    const exercises = [
        [
            "Standard push-up",
            "Wide push-up",
            "Narrow push-up",
            "Staggered push-up",
        ],
        [
            "Plank hip-dips",
            "Russian twists",
            "Crunches",
            "Leg raises",
            "Mountain climbers",
            "Bicycle crunches",
            "Flutter kicks",
            "Side plank twists",
            "Sit-ups"
        ],
        [
            "Pull-ups",
            "Dumbbell rows",
            "Shrugs"
        ],
        [
            "Bodyweight Squats",
            "Lunges",
            "Bulgarian Split Squats",
            "Pistol Squats",
            "Leg Extensions",
            "Leg Curls",
        ],
        [
            "Reverse shoulder flyes",
            "Dumbbell shoulder press",
            "Lateral raises",
            "Rotator cuff band-work",
            "Headstand push-ups",
        ],
        [
            "Bicep curls (optional)",
            "Tricep dips (optional)",
            "Hammer curls (optional)",
            "Tricep extensions (optional)",
            "Back extensions (optional)",
        ],
    ];

    const sets = [
        "3 x 10 reps",
        "3 x 20 reps",
        "3 x 10 reps",
        "3 x 20 reps",
        "3 x 10 reps",
        "3 x 10 reps",
    ]

    function getRandomExercise(exercisesArray) {
        let workout = [];
        exercisesArray.forEach(exerciseList => {
            const randomIndex = Math.floor(Math.random() * exerciseList.length);
            workout.push(exerciseList[randomIndex]);
        });
        return workout;
    }

    function createExerciseList(exercisesArray) {
        const exerciseList = document.createElement("ul");
        exerciseList.innerHTML = "";
        exercisesArray.forEach((exercise, idx) => {
            const exerciseItem = document.createElement("li");
            exerciseItem.textContent = exercise + " - " + sets[idx];
            exerciseList.appendChild(exerciseItem);
        });

        workoutDiv.innerHTML = "";
        workoutDiv.appendChild(exerciseList);
    }

    button.addEventListener('click', () => {
        const workout = getRandomExercise(exercises);
        createExerciseList(workout);
    });


    button.addEventListener('click', () => {
        const workout = getRandomExercise(exercises);
        createExerciseList(workout);
    });
});







// document.addEventListener("DOMContentLoaded", () => {
//     const workoutDiv = document.querySelector(".workout");
//     const button = document.querySelector("button");

//     const exercises = [
//         [
//             "Standard push-up",
//             "Wide push-up",
//             "Narrow push-up",
//             "Staggered push-up",
//         ],
//         [
//             "Plank hip-dips",
//             "Russian twists",
//             "Crunches",
//             "Leg raises",
//             "Mountain climbers",
//             "Bicycle crunches",
//             "Flutter kicks",
//             "Side plank twists",
//             "Sit-ups"
//         ],
//         [
//             "Pull-ups",
//             "Dumbbell rows",
//             "Shrugs"
//         ],
//         [
//             "Bodyweight Squats",
//             "Lunges",
//             "Bulgarian Split Squats",
//             "Pistol Squats",
//             "Leg Extensions",
//             "Leg Curls",
//         ],
//         [
//             "Reverse shoulder flyes",
//             "Dumbbell shoulder press",
//             "Lateral raises",
//             "Rotator cuff band-work",
//             "Headstand push-ups",
//         ],
//         [
//             "Bicep curls (optional)",
//             "Tricep dips (optional)",
//             "Hammer curls (optional)",
//             "Tricep extensions (optional)",
//             "Back extensions (optional)",
//         ],
//     ];

//     const sets = [
//         "3 x 10 reps",
//         "3 x 20 reps",
//         "3 x 10 reps",
//         "3 x 20 reps",
//         "3 x 10 reps",
//         "3 x 10 reps",
//     ]

//     function getRandomExercise(exercisesArray) {
//         let workout = [];
//         exercisesArray.forEach(exerciseList => {
//             const randomIndex = Math.floor(Math.random() * exerciseList.length);
//             workout.push(exerciseList[randomIndex]);
//         });
//         return workout;
//     }

//     function createExerciseList(exercisesArray) {
//         const exerciseList = document.createElement("ul");
//         exerciseList.innerHTML = "";
//         exercisesArray.forEach((exercise, idx) => {
//             const exerciseItem = document.createElement("li");
//             exerciseItem.textContent = exercise + " - " + sets[idx];
//             exerciseList.appendChild(exerciseItem);
//         });

//         workoutDiv.innerHTML = "";
//         workoutDiv.appendChild(exerciseList);
//     }

//     button.addEventListener('click', () => {
//         const workout = getRandomExercise(exercises);
//         createExerciseList(workout);
//     });
// });