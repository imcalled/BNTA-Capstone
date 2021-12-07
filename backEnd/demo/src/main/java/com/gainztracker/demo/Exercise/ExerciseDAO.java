package com.gainztracker.demo.Exercise;

import java.util.List;
import java.util.Optional;

public interface ExerciseDAO {

    List<Exercise> getAllExercises();
    Optional<Exercise> getExerciseById(int id);
    Optional<Exercise> getExerciseByName(String name);
    void createExercise(Exercise exercise);
    void updateExerciseById(int id, Exercise exercise);
    void updateExerciseByName(String name, Exercise exercise);
    void deleteExerciseById(int id);
    void deleteExerciseByName(String name);
}
