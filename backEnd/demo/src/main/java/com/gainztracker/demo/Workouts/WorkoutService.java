package com.gainztracker.demo.Workouts;

import org.springframework.stereotype.Service;

import java.util.List;

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
}
