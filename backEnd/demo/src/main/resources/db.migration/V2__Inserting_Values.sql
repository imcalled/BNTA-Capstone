INSERT INTO Exercise(name, ExerciseType ) VALUES ('Treadmill', 'CARDIO');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Rowing', 'CARDIO');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Spinning', 'CARDIO');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Elliptical', 'CARDIO');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Stairclimber', 'CARDIO');

INSERT INTO Exercise(name, ExerciseType ) VALUES ('Pushups', 'CALISTHENICS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Pullups', 'CALISTHENICS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Dips', 'CALISTHENICS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Situps', 'CALISTHENICS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Burpees', 'CALISTHENICS');

INSERT INTO Exercise(name, ExerciseType ) VALUES ('Squats', 'WEIGHTS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Bench Press', 'WEIGHTS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Deadlifts', 'WEIGHTS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Overhead Press', 'WEIGHTS');
INSERT INTO Exercise(name, ExerciseType ) VALUES ('Clean and Press', 'WEIGHTS');

INSERT INTO Workouts(name) VALUES ('Basic Workout');
INSERT INTO Workouts(name) VALUES ('Intermediate Workout');
INSERT INTO Workouts(name) VALUES ('Advanced Workout');

INSERT INTO ExerciseTarget(exerciseID, workoutID,time,distance,sets,reps,weight)
VALUES (1,1,0,1000,0,0,0);
INSERT INTO ExerciseTarget(exerciseID, workoutID,time,distance,sets,reps,weight)
VALUES (6,1,0,0,3,3,0);
INSERT INTO ExerciseTarget(exerciseID, workoutID,time,distance,sets,reps,weight)
VALUES (7,1,0,0,2,4,0);

INSERT INTO ExerciseTarget(exerciseID, workoutID,time,distance,sets,reps,weight)
VALUES (1,2,0,2000,0,0,0);
INSERT INTO ExerciseTarget(exerciseID, workoutID,time,distance,sets,reps,weight)
VALUES (6,2,0,0,5,4,0);
INSERT INTO ExerciseTarget(exerciseID, workoutID,time,distance,sets,reps,weight)
VALUES (7,2,0,0,4,6,0);


