
const exercises = [
  legs = [
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
        beginner: {strength: "4x8" , hypertropphy: "4x12"},
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

let actualWeight = document.querySelector("#weight");
let submitButton = document.querySelector("#submit");
let weight;
submitButton.addEventListener("click", () => {
    weight = actualWeight.value;
})

level = "beginner";
let goal = "strength";
let type = "calisthenic";

let Muscle = {
	legs: legs,
	chest: chest,
	back: back,
	shoulders: shoulders,
	arms: arms,
	core: core
};
let category, primary, secondary, lastly;
for (let i = 0; i < Object.keys(Muscle).length; i++) {
	let muscle = Object.keys(Muscle)[i];
	primary = Muscle[muscle].filter(exercise => exercise.category === type && exercise.level.includes(level) && exercise.goal.includes(goal));
	if (primary.length >= 3) {
		let result = primary.slice(0, 3);
		console.log(primary);
		console.log(result);
	} else {
		let result = primary.slice(0, primary.length);
		secondary = Muscle[muscle].filter(exercise => (exercise.category === "calisthenic" || exercise.category === "compound" || exercise.category === "bodybuilding") && exercise.level.includes(level) && (exercise.goal.includes("strength") || exercise.goal.includes("hypertrophy") || exercise.goal.includes("fatloss")) && !primary.includes(exercise));
		result = primary.concat(secondary);
		console.log(secondary);
		console.log(result.slice(0, 3));
	}
}
