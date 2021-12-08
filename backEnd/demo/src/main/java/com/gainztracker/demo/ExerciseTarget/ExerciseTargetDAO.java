package com.gainztracker.demo.ExerciseTarget;

import java.util.List;
import java.util.Optional;

public interface ExerciseTargetDAO {

    List<ExerciseTarget> getAllExerciseTargets();

    Optional<ExerciseTarget> getExerciseTargetById(int id);

    int createExerciseTarget(ExerciseTarget exerciseTarget);

    int updateExerciseTargetById(int id, ExerciseTarget exerciseTarget);

    int deleteExerciseTargetById(int id);

    List<ExerciseTarget> getExerciseTargetsOfWorkout(int id);
}
