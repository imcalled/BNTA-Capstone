package com.gainztracker.demo.ExerciseDataPoint;

import java.time.LocalDate;
import java.util.List;

public interface ExerciseDataPointDAO {
    int postCardio(int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved);
    int postCalisthenics(ExerciseDataPoint exerciseDataPoint);
    int postWeights(ExerciseDataPoint exerciseDataPoint);
    List<ExerciseDataPoint> getAll();
}
