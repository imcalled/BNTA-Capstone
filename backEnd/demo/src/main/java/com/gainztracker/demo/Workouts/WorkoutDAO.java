package com.gainztracker.demo.Workouts;

import java.util.List;
import java.util.Optional;

public interface WorkoutDAO {

    List<Workout> getAllWorkouts();

    int createWorkout(Workout workout);

    Optional<Workout> getWorkoutById(int id);
}
