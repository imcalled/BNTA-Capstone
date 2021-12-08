package com.gainztracker.demo.ExerciseDataPoint;

import java.util.List;
import java.util.Optional;

public interface ExerciseDataPointDAO {
    int postCardio(ExerciseDataPoint exerciseDataPoint);
    int postCalisthenics(ExerciseDataPoint exerciseDataPoint);
    int postWeights(ExerciseDataPoint exerciseDataPoint);
    List<ExerciseDataPoint> getAll();
    List<ExerciseDataPoint>getDataPointByExerciseID(int id);

    List<ExerciseDataPoint> getDataPointByExerciseName(String name);
}
