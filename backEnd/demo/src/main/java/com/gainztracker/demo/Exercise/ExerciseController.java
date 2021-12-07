package com.gainztracker.demo.Exercise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/exercises")
public class ExerciseController {

    private ExerciseService exerciseService;

    @Autowired
    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    //get all exercises
    @GetMapping
    public List<Exercise> getAllExercises() {
        return exerciseService.getAllExercises();
    }

    //get exercise by id
    @GetMapping("{id}")
    public Optional<Exercise> getExerciseById(@PathVariable("id") int id) {
        return exerciseService.getExerciseById(id);
    }

    //get exercise by name
    @GetMapping("{name}")
    public Optional<Exercise> getExerciseByName(@PathVariable("name") String name) {
        return exerciseService.getExerciseByName(name);
    }

    //create new exercise
    @PostMapping
    public void createExercise(@RequestBody Exercise exercise) {
        exerciseService.createExercise(exercise);
    }

    //update existing exercise by id
    @PutMapping("{id}")
    public void updateExerciseById(@PathVariable("id") int id,
                                   @RequestBody Exercise exercise) {
        exerciseService.updateExerciseById(id, exercise);
    }

    //update existing exercise by name
    @PutMapping("{name}")
    public void updateExerciseByName(@PathVariable("name") String name,
                                   @RequestBody Exercise exercise) {
        exerciseService.updateExerciseByName(name, exercise);
    }

    //delete exercise by id
    @DeleteMapping("{id}")
    public void deleteExerciseById(@PathVariable("id") int id) {
        exerciseService.deleteExerciseById(id);
    }

    //delete exercise by name
    @DeleteMapping("{name}")
    public void deleteExerciseByName(@PathVariable("name") String name) {
        exerciseService.deleteExerciseByName(name);
    }
}