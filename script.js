document.addEventListener("DOMContentLoaded", () => {
    const workoutDiv = document.querySelector(".workout");
    const button = document.querySelector("button");

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
});