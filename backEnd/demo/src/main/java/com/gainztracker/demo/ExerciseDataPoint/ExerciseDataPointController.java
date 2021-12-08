package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.Exercise;
import com.gainztracker.demo.Exercise.ExerciseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/data")
public class ExerciseDataPointController {

    private ExerciseDataPointService exerciseDataPointService;
    @Autowired
    public ExerciseDataPointController(ExerciseDataPointService exerciseDataPointService) {
        this.exerciseDataPointService = exerciseDataPointService;
    }

    @GetMapping
    public List<ExerciseDataPoint> getAll(@RequestBody ExerciseDataPoint exerciseDataPoint){
        return exerciseDataPointService.getAll();
    }

    @GetMapping("/{id}")
    public List<ExerciseDataPoint> getDataPointByExerciseID(@PathVariable("id") int id){
        return exerciseDataPointService.getDataPointByExerciseID(id);
    }
    @GetMapping("/name/{name}")
    public List<ExerciseDataPoint> getDataPointByExerciseName(@PathVariable("name") String name){
        return exerciseDataPointService.getDataPointByExerciseName(name);
    }

    @PostMapping("/cardio")
    public void postCardio(@RequestBody ExerciseDataPoint exerciseDataPoint){
        exerciseDataPointService.postCardio(exerciseDataPoint);

    }

    @PostMapping("/calisthenics")
    public void postCalisthenics(@RequestBody ExerciseDataPoint exerciseDataPoint){
        exerciseDataPointService.postCalisthenics(exerciseDataPoint);
    }

    @PostMapping("/weights")
    public void postWeights(@RequestBody ExerciseDataPoint exerciseDataPoint){
        exerciseDataPointService.postWeights(exerciseDataPoint);
    }


}