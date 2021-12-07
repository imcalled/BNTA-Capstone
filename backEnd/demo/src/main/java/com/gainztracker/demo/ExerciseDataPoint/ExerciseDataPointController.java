package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.ExerciseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/data")
public class ExerciseDataPointController {

    private ExerciseDataPointService exerciseDataPointService;
    @Autowired
    public ExerciseDataPointController(ExerciseDataPointService exerciseDataPointService) {
        this.exerciseDataPointService = exerciseDataPointService;
    }

    @PostMapping
    public void TimeAchieved(@RequestBody ExerciseDataPoint exerciseDataPoint){
        exerciseDataPointService.postTime();



    }




}
