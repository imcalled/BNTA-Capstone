package com.gainztracker.demo.ExerciseTarget;
import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/exerciseTargets")
public class ExerciseTargetController {

    private ExerciseTargetService exerciseTargetService;

    @Autowired
    public ExerciseTargetController(ExerciseTargetService exerciseTargetService){
        this.exerciseTargetService = exerciseTargetService;
    }

    //get all exercise targets
    @GetMapping
    public List<ExerciseTarget> getAllExerciseTargets() {
        return exerciseTargetService.getAllExerciseTargets();
    }

    //get exercise target by id
    @GetMapping("/id/{id}")
    public Optional<ExerciseTarget> getExerciseTargetById(@PathVariable("id") int id) {
        return exerciseTargetService.getExerciseTargetById(id);
    }

    //get all exercise targets of one workout
    @GetMapping("/workout/id/{id}")
    public List<ExerciseTarget> getExerciseTargetsOfWorkout(@PathVariable("id") int id){
        return exerciseTargetService.getExerciseTargetsOfWorkout(id);
    }


    // TODO: 07/12/2021 Allow to get target by exercise name
//    //get exercise target by exercise name
//    @GetMapping("/name/{name}")
//    public Optional<ExerciseTarget> getExerciseTargetByName(@PathVariable("name") String name) {
//        return exerciseTargetService.getExerciseTargetByName(name);
//    }

//    Create a new exercise target
    @PostMapping
    public void createExerciseTarget(@RequestBody ExerciseTarget exerciseTarget){exerciseTargetService.createExerciseTarget(exerciseTarget);}

//    Update an existing exercise target by id
    @PutMapping("/id/{id}")
    public void updateExerciseTargetByName(
            @PathVariable("id") int id,
            @RequestBody ExerciseTarget exerciseTarget){
        exerciseTargetService.updateExerciseTargetById(id,exerciseTarget);
    }

    // TODO: 07/12/2021 Allow to update target from exercise name
//    @PutMapping("/id/{id}")
//    public void updateExerciseTargetByName(
//            @PathVariable("id") int id,
//            @RequestBody ExerciseTarget exerciseTarget){
//        exerciseTargetService.updateExerciseTargetById(id,exerciseTarget);
//    }

    @DeleteMapping("/id/{id}")
    public void deleteExerciseTargetById(@PathVariable("id") int id){exerciseTargetService.deleteExerciseTargetById(id);}

    // TODO: 07/12/2021 Allow to delete target from exercise name
//    @DeleteMapping("/id/{id}")
//    public void deleteExerciseTargetById(@PathVariable("id") int id){exerciseTargetService.deleteExerciseTargetById(id);}


}
