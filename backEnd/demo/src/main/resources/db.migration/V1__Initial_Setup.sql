CREATE TYPE ExerciseType as ENUM('CARDIO', 'CALISTHENICS', 'WEIGHTS');

CREATE TABLE Exercise(
id BIGSERIAL PRIMARY KEY,
name TEXT,
ExerciseType ExerciseType
);

CREATE TABLE ExcerciseTarget(
id BIGSERIAL PRIMARY KEY,
exerciseID INT REFERENCES Exercise(id),
time INTERVAL,
sets INT,
reps INT,
weight, INT
);

CREATE TABLE ExcerciseDataPoint(
id BIGSERIAL PRIMARY KEY,
exerciseID INT REFERENCES Exercise(id),
timeAchieved INTERVAL,
setsAchieved INT,
repsAchieved INT,
weightAchieved, INT
);

CREATE TABLE Workouts(
id BIGSERIAL PRIMARY KEY,
name TEXT,
ListOfExcerciseTargets INT REFERENCES ExerciseTarget(id)
);