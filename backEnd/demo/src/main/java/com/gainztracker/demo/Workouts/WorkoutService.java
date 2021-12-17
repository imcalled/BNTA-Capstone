package com.gainztracker.demo.Workouts;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {
    private WorkoutDAO workoutDAO;

    public WorkoutService(WorkoutDAO workoutDAO) {
        this.workoutDAO = workoutDAO;
    }

    public List<Workout> getAllWorkouts() {
        return workoutDAO.getAllWorkouts();
    }

    public void createWorkout(Workout workout) {
        workoutDAO.createWorkout(workout);
    }

    public Optional<Workout> getWorkoutById(int id) {
        return workoutDAO.getWorkoutById(id);
    }

    public void deleteWorkoutById(int id) {workoutDAO.deleteWorkoutById(id);
    }
}
