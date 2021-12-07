package com.gainztracker.demo.ExerciseDataPoint;

public interface ExerciseDataPointDAO {
    int postCardio(ExerciseDataPoint exerciseDataPoint);
    int postCalisthenics(ExerciseDataPoint exerciseDataPoint);
    int postWeights(ExerciseDataPoint exerciseDataPoint);

}
