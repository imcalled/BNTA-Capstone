package com.gainztracker.demo.Exercise;

import java.util.List;
import java.util.Optional;

public interface ExerciseDAO {

    List<Exercise> getAllExercises();
    Optional<Exercise> getExerciseById(int id);
    Optional<Exercise> getExerciseByName(String name);
    int createExercise(Exercise exercise);
    int updateExerciseById(int id, Exercise exercise);
    int updateExerciseByName(String name, Exercise exercise);
    int deleteExerciseById(int id);
    int deleteExerciseByName(String name);
}
