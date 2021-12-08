package com.gainztracker.demo.ExerciseDataPoint;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ExerciseDataPointDAO {
    int postCardio(int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved);
    int postCalisthenics(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved);
    int postWeights(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved, int weightAchieved);
    List<ExerciseDataPoint> getAll();

//     int postCardio(ExerciseDataPoint exerciseDataPoint);
//     int postCalisthenics(ExerciseDataPoint exerciseDataPoint);
//     int postWeights(ExerciseDataPoint exerciseDataPoint);
//     List<ExerciseDataPoint> getAll();
//     List<ExerciseDataPoint>getDataPointByExerciseID(int id);

//     List<ExerciseDataPoint> getDataPointByExerciseName(String name);

}
