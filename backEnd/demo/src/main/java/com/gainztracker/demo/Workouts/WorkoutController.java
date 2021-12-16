package com.gainztracker.demo.Workouts;

import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/workout")
public class WorkoutController {

    private WorkoutService workoutService;

    @Autowired
    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    //Get workout by id
    @GetMapping("/id/{id}")
    public Optional<Workout> getWorkoutById(@PathVariable("id") int id) {
        return workoutService.getWorkoutById(id);
    }

    @GetMapping
    public List<Workout> getAllWorkouts(){
        return workoutService.getAllWorkouts();
    }

    @PostMapping
    public void createWorkout(@RequestBody Workout workout) {workoutService.createWorkout(workout);}
}
