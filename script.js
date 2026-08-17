let level = "";
let goal = "";
let weight;
let exerciseType = "";
const container_level = document.querySelectorAll(".level-btns button");
const container_goal = document.querySelectorAll(".Fitness-btn button");
const container_exercise = document.querySelectorAll(".exercise-btn button");

const exercises = [
  Legs = [
  {
    name: "Barbell Back Squat", category: "compound", muscle: "legs",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x6", hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x5", hypertrophy: "4x10", fatloss: "4x15" },
        expert:       { strength: "5x4", hypertrophy: "5x10", fatloss: "5x15" }
    }
  },
  {
    name: "Bodyweight Squat", category: "calisthenic", muscle: "legs",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x12", hypertrophy: "3x15", fatloss: "3x20" },
        intermediate: { strength: "4x15", hypertrophy: "4x15", fatloss: "4x25" },
        expert:       { strength: "5x20", hypertrophy: "5x20", fatloss: "5x30" }
    }
  },
  {
    name: "Walking Lunges", category: "calisthenic", muscle: "legs",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x10", hypertrophy: "4x12", fatloss: "4x15" },
        expert:       { strength: "4x12", hypertrophy: "5x12", fatloss: "5x20" }
    }
  },
  {
    name: "Leg Press", category: "compound", muscle: "legs",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { strength: "4x8",  hypertrophy: "4x12", fatloss: "4x15" },
        expert:       { strength: "5x6",  hypertrophy: "5x12", fatloss: "5x20" }
    }
  },
  {
    name: "Leg Extension", category: "bodybuilding", muscle: "legs",
    level: ["intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        intermediate: { hypertrophy: "3x12", fatloss: "3x18" },
        expert:       { hypertrophy: "4x15", fatloss: "4x20" }
    }
  },
  {
    name: "Romanian Deadlift", category: "compound", muscle: "legs",
    level: ["intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        intermediate: { strength: "4x6", hypertrophy: "4x10" },
        expert:       { strength: "5x5", hypertrophy: "5x10" }
    }
  },
  
  // GLUTES
{
    name: "Hip Thrust", category: "compound", muscle: "glutes",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { strength: "4x8",  hypertrophy: "4x12", fatloss: "4x15" },
        expert:       { strength: "5x6",  hypertrophy: "5x12", fatloss: "5x20" }
    }
    },
    {
    name: "Glute Bridge", category: "calisthenic", muscle: "glutes",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x12", hypertrophy: "3x15", fatloss: "3x20" },
        intermediate: { strength: "4x15", hypertrophy: "4x15", fatloss: "4x20" },
        expert:       { strength: "4x20", hypertrophy: "5x20", fatloss: "5x25" }
    }
},
{
  name: "Bulgarian Split Squat", category: "calisthenic", muscle: "legs",
  level: ["intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
  sets: {
    intermediate: { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x15" },
    expert:       { strength: "4x10", hypertrophy: "4x15", fatloss: "4x20" }
  }
},
{
  name: "Jump Squat", category: "calisthenic", muscle: "legs",
  level: ["beginner", "intermediate", "expert"], goal: ["fatloss", "hypertrophy"],
  sets: {
    beginner:     { fatloss: "3x12", hypertrophy: "3x10" },
    intermediate: { fatloss: "4x15", hypertrophy: "4x12" },
    expert:       { fatloss: "4x20", hypertrophy: "5x15" }
  }
}],
  chest = [
  {
    name: "Push Up", category: "calisthenic", muscle: "chest",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x20" },
        intermediate: { strength: "4x10", hypertrophy: "4x12", fatloss: "4x20" },
        expert:       { strength: "5x15", hypertrophy: "5x15", fatloss: "5x25" }
    }
  },
  {
    name: "Barbell Bench Press", category: "compound", muscle: "chest",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x6", hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x5", hypertrophy: "4x10", fatloss: "4x15" },
        expert:       { strength: "5x4", hypertrophy: "5x10", fatloss: "5x15" }
    }
  },
  {
    name: "Incline Dumbbell Press", category: "compound", muscle: "chest",
    level: ["beginner","intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        beginner: {strength: "4x8" , hypertrophy: "4x12"},
        intermediate: { strength: "4x8", hypertrophy: "4x12" },
        expert:       { strength: "5x6", hypertrophy: "5x12" }
    }
  },
  {
    name: "Dumbbell Fly", category: "bodybuilding", muscle: "chest",
    level: ["intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        intermediate: { hypertrophy: "3x12", fatloss: "3x18" },
        expert:       { hypertrophy: "4x15", fatloss: "4x20" }
    }
  },
  {
    name: "Dips", category: "calisthenic", muscle: "chest",
    level: ["intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        intermediate: { strength: "3x8",  hypertrophy: "3x12" },
        expert:       { strength: "4x10", hypertrophy: "4x15" }
    }
  },
  {
  name: "Decline Push Up", category: "calisthenic", muscle: "chest",
  level: ["intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
  sets: {
    intermediate: { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x18" },
    expert:       { strength: "4x12", hypertrophy: "4x15", fatloss: "4x20" }
  }
}],

  back = [
  {
    name: "Pull Up", category: "calisthenic", muscle: "back",
    level: ["intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        intermediate: { strength: "3x6", hypertrophy: "3x10" },
        expert:       { strength: "4x8", hypertrophy: "5x10" }
    }
  },
  {
    name: "Lat Pulldown", category: "compound", muscle: "back",
    level: ["beginner", "intermediate"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { strength: "4x8",  hypertrophy: "4x12", fatloss: "4x15" }
    }
  },
  {
    name: "Barbell Deadlift", category: "compound", muscle: "back",
    level: ["intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        intermediate: { strength: "4x5", hypertrophy: "4x8" },
        expert:       { strength: "5x3", hypertrophy: "5x8" }
    }
  },
  {
    name: "Bent Over Barbell Row", category: "compound", muscle: "back",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x8",  hypertrophy: "4x12", fatloss: "4x15" },
        expert:       { strength: "5x6",  hypertrophy: "5x12", fatloss: "5x18" }
    }
  },
  {
    name: "Seated Cable Row", category: "bodybuilding", muscle: "back",
    level: ["beginner", "intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        beginner:     { hypertrophy: "3x12", fatloss: "3x18" },
        intermediate: { hypertrophy: "4x12", fatloss: "4x18" },
        expert:       { hypertrophy: "4x15", fatloss: "5x20" }
    }
  },
  {
    name: "Superman Hold", category: "calisthenic", muscle: "back",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        beginner:     { strength: "3x10", hypertrophy: "3x12" },
        intermediate: { strength: "3x15", hypertrophy: "3x15" },
        expert:       { strength: "4x20", hypertrophy: "4x20" }
    }
    },
    {
    name: "Inverted Row", category: "calisthenic", muscle: "back",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x6",  hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x8",  hypertrophy: "4x12", fatloss: "4x18" },
        expert:       { strength: "4x12", hypertrophy: "5x12", fatloss: "5x20" }
    }
}],
  shoulders = [
  {
    name: "Overhead Barbell Press", category: "compound", muscle: "shoulders",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x6", hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x6", hypertrophy: "4x10", fatloss: "4x15" },
        expert:       { strength: "5x5", hypertrophy: "5x10", fatloss: "5x15" }
    }
  },
  {
    name: "Pike Push Up", category: "calisthenic", muscle: "shoulders",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x6",  hypertrophy: "3x10", fatloss: "3x15" },
        intermediate: { strength: "4x8",  hypertrophy: "4x12", fatloss: "4x18" },
        expert:       { strength: "4x12", hypertrophy: "5x12", fatloss: "5x20" }
    }
  },
  {
    name: "Lateral Raises", category: "bodybuilding", muscle: "shoulders",
    level: ["beginner", "intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        beginner:     { hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { hypertrophy: "4x12", fatloss: "4x18" },
        expert:       { hypertrophy: "4x15", fatloss: "5x20" }
    }
  },
  {
    name: "Front Raises", category: "bodybuilding", muscle: "shoulders",
    level: ["intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        intermediate: { hypertrophy: "3x12", fatloss: "3x15" },
        expert:       { hypertrophy: "4x12", fatloss: "4x18" }
    }
  },
  {
    name: "Rear Delt Fly", category: "bodybuilding", muscle: "shoulders",
    level: ["intermediate", "expert"], goal: ["hypertrophy"],
    sets: {
        intermediate: { hypertrophy: "3x12" },
        expert:       { hypertrophy: "4x15" }
    }
  },
{
        name: "Wall Handstand Hold", category: "calisthenic", muscle: "shoulders",
        level: ["intermediate", "expert"], goal: ["strength"],
        sets: {
            intermediate: { strength: "3x15s" },
            expert:       { strength: "4x30s" }
    }
    },
    {
        name: "Bear Crawl", category: "calisthenic", muscle: "shoulders",
        level: ["beginner", "intermediate", "expert"], goal: ["fatloss", "hypertrophy"],
        sets: {
            beginner:     { fatloss: "3x20s", hypertrophy: "3x15s" },
            intermediate: { fatloss: "3x30s", hypertrophy: "3x25s" },
            expert:       { fatloss: "4x40s", hypertrophy: "4x30s" }
    }
}],
  arms = [
  {
    name: "Dumbbell Bicep Curl", category: "bodybuilding", muscle: "arms",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8", hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { strength: "4x8", hypertrophy: "4x12", fatloss: "4x15" },
        expert:       { strength: "4x6", hypertrophy: "5x12", fatloss: "5x15" }
    }
  },
  {
    name: "Chin Up", category: "calisthenic", muscle: "arms",
    level: ["intermediate", "expert"], goal: ["strength", "hypertrophy"],
    sets: {
        intermediate: { strength: "3x6", hypertrophy: "3x10" },
        expert:       { strength: "4x8", hypertrophy: "5x10" }
    }
  },
  {
    name: "Triceps Dip (Bench)", category: "calisthenic", muscle: "arms",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { strength: "4x10", hypertrophy: "4x12", fatloss: "4x18" },
        expert:       { strength: "4x12", hypertrophy: "5x15", fatloss: "5x20" }
    }
  },
  {
    name: "Triceps Rope Pushdown", category: "bodybuilding", muscle: "arms",
    level: ["beginner", "intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        beginner:     { hypertrophy: "3x12", fatloss: "3x15" },
        intermediate: { hypertrophy: "4x12", fatloss: "4x18" },
        expert:       { hypertrophy: "4x15", fatloss: "5x20" }
    }
  },
  {
    name: "Hammer Curl", category: "bodybuilding", muscle: "arms",
    level: ["intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        intermediate: { hypertrophy: "3x12", fatloss: "3x15" },
        expert:       { hypertrophy: "4x12", fatloss: "4x18" }
    }
  },
    {
        name: "Negative Chin-Up", category: "calisthenic", muscle: "arms",
        level: ["beginner", "intermediate"], goal: ["strength", "hypertrophy"],
        sets: {
            beginner:     { strength: "3x5", hypertrophy: "3x5" },
            intermediate: { strength: "4x6", hypertrophy: "4x8" }
}
}],
  core = [
  {
    name: "Plank", category: "calisthenic", muscle: "core",
    level: ["beginner", "intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        beginner:     { strength: "3x30s", hypertrophy: "3x30s", fatloss: "3x45s" },
        intermediate: { strength: "3x45s", hypertrophy: "3x45s", fatloss: "3x60s" },
        expert:       { strength: "3x60s", hypertrophy: "4x60s", fatloss: "4x90s" }
    }
  },
  {
    name: "Hanging Leg Raise", category: "calisthenic", muscle: "core",
    level: ["intermediate", "expert"], goal: ["strength", "hypertrophy", "fatloss"],
    sets: {
        intermediate: { strength: "3x8",  hypertrophy: "3x12", fatloss: "3x15" },
        expert:       { strength: "4x10", hypertrophy: "4x15", fatloss: "4x20" }
    }
  },
  {
    name: "Cable Crunch", category: "bodybuilding", muscle: "core",
    level: ["intermediate", "expert"], goal: ["hypertrophy", "fatloss"],
    sets: {
        intermediate: { hypertrophy: "3x15", fatloss: "3x20" },
        expert:       { hypertrophy: "4x15", fatloss: "4x25" }
    }
  },
  {
    name: "Russian Twist", category: "calisthenic", muscle: "core",
    level: ["beginner", "intermediate", "expert"], goal: ["fatloss", "hypertrophy"],
    sets: { 
        beginner:     { fatloss: "3x20", hypertrophy: "3x15" },
        intermediate: { fatloss: "3x30", hypertrophy: "3x20" },
        expert:       { fatloss: "4x40", hypertrophy: "4x25" }
    }
},
{
    name: "Bicycle Crunch", category: "calisthenic", muscle: "core",
    level: ["beginner", "intermediate", "expert"], goal: ["fatloss", "hypertrophy"],
    sets: {
        beginner:     { fatloss: "3x20", hypertrophy: "3x15" },
        intermediate: { fatloss: "3x30", hypertrophy: "3x20" },
        expert:       { fatloss: "4x40", hypertrophy: "4x25" }
    }
}]
];

let cards = document.querySelectorAll(".card");
let heading = document.querySelectorAll(".title");
let sets = document.querySelectorAll(".sets");
let reps = document.querySelectorAll(".reps");
let start = document.querySelector(".get-started-btn");
let count;

function generateOutput(result) {
  count += 3;
  for (let i = 0; i < 3; i++) {
    let card = cards[count + i]; 

    if (i < result.length) {
      card.classList.remove("card-hide");
      heading[count + i].innerText = result[i].name;
      let setDetails = result[i].sets[level][goal];
      let valueCount = setDetails.split("x");
      console.log(`Sets and reps for ${result[i].name}:`, valueCount);
      sets[count + i].innerText = valueCount[0];
      reps[count + i].innerText = valueCount[1];
    }
    else {
      card.classList.add("card-hide");
    }
  }
}

function Workout(level, goal, type, weight) {
  this.level = level;
  this.goal = goal;
  this.type = type;
  this.weight = weight;
  count = -3;

  const Muscle = {
    Chest: chest,
    Back: back,
    Shoulders: shoulders,
    Arms: arms,
    Legs: Legs,
    Core: core
  }
  for (let i = 0; i < Object.keys(Muscle).length; i++) {
    let muscle = Object.keys(Muscle)[i];
    let primary = Muscle[muscle].filter(exercise => exercise.category === type && exercise.level.includes(level) && exercise.goal.includes(goal));
    if (primary.length >= 3) {
      let result = primary.slice(0, 3);
      console.log(`Selected exercises for ${muscle}:`, result.slice(0, 3));
      generateOutput(result);
    } else {
      let secondary = Muscle[muscle].filter(exercise => (exercise.category === "calisthenic" || exercise.category === "compound" || exercise.category === "bodybuilding") && exercise.level.includes(level) && (exercise.goal.includes(goal)) && !primary.includes(exercise));
      let result = primary.concat(secondary);
      console.log(`Selected exercises for ${muscle}:`, result.slice(0, 3));
      generateOutput(result.slice(0, 3));
    }
  }
  document.querySelector("#results-section").scrollIntoView({ behavior: "smooth"});
}

start.addEventListener("click", (e) => {
  document.querySelector("#input-section").scrollIntoView({ behavior: "smooth"});
})


container_level.forEach(button => {
    button.addEventListener("click", () => {
        container_level.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        level = button.id;
        console.log(level);
    })
})

container_goal.forEach(button => {
    button.addEventListener("click", () => {
        container_goal.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        goal = button.id;
        console.log(goal);
    })
})

container_exercise.forEach(button => {
    button.addEventListener("click", () => {
      container_exercise.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      exerciseType = button.id;
      console.log(exerciseType);
    })
})
let generateBtn = document.getElementById("generate-btn");
let weightInput = document.getElementById("weight");

generateBtn.addEventListener("click", () => {
    if (weightInput.value === "" || level === "" || goal === "" || exerciseType === "") {
        alert("Please fill in all fields");
        return;
    }
    console.log("Generating workout...");
    document.querySelector("#loading").classList.add("visible");
    setTimeout(() => {
      document.querySelector("#loading").classList.remove("visible");
      document.querySelector("#results-section").classList.add("visible");
      const workout = new Workout(level, goal, exerciseType, weightInput.value);
    } , 5000);  
})

