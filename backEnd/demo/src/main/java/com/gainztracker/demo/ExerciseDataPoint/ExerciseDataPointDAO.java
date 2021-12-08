package com.gainztracker.demo.ExerciseDataPoint;

import java.time.LocalDate;
import java.util.List;

public interface ExerciseDataPointDAO {
    int postCardio(int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved);
    int postCalisthenics(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved);
    int postWeights(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved, int weightAchieved);
    List<ExerciseDataPoint> getAll();
}
