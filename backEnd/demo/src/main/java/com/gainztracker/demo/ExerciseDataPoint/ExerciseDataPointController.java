package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.Exercise;
import com.gainztracker.demo.Exercise.ExerciseController;
import com.gainztracker.demo.ExerciseTarget.ExerciseTarget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
    public List<ExerciseDataPoint> getAll(){
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
    public void postCardio(@RequestBody int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved){
        exerciseDataPointService.postCardio(exerciseID, date, timeAchieved, distanceAchieved);

    }

    @PostMapping("/calisthenics")
    public void postCalisthenics(@RequestBody int exerciseID, LocalDate date, int setsAchieved, int repsAchieved){
        exerciseDataPointService.postCalisthenics(exerciseID, date, setsAchieved, repsAchieved);
    }

    @PostMapping("/weights")
    public void postWeights(@RequestBody int exerciseID, LocalDate date, int setsAchieved, int repsAchieved, int weightAchieved){
        exerciseDataPointService.postWeights(exerciseID, date, setsAchieved, repsAchieved, weightAchieved);
    }

    @PostMapping("/record")
    public void postDatapoint(@RequestBody ExerciseDataPoint exerciseDataPoint){exerciseDataPointService.postDataPoint(exerciseDataPoint);}

}