package com.gainztracker.demo.Workouts;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutService {
    private WorkoutDAO workoutDAO;

    public List<Workout> getAllWorkouts() {
        return workoutDAO.getAllWorkouts();
    }
}
