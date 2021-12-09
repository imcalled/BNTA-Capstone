package com.gainztracker.demo.Workouts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/workout")
public class WorkoutController {

    private WorkoutService workoutService;

    @Autowired
    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @GetMapping
    public List<Workout> getAllWorkouts(){
        return workoutService.getAllWorkouts();
    }

    @PostMapping
    public void createWorkout(@RequestBody Workout workout) {workoutService.createWorkout(workout);}
}
