package com.gainztracker.demo.ExerciseDataPoint;

import java.util.List;

public interface ExerciseDataPointDAO {
    int postCardio(ExerciseDataPoint exerciseDataPoint);
    int postCalisthenics(ExerciseDataPoint exerciseDataPoint);
    int postWeights(ExerciseDataPoint exerciseDataPoint);
    List<ExerciseDataPoint> getAll(ExerciseDataPoint exerciseDataPoint);
}
