package com.gainztracker.demo.ExerciseTarget;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseTargetService {

    private ExerciseTargetDAO exerciseTargetDAO;

    @Autowired
    public ExerciseTargetService(ExerciseTargetDAO exerciseTargetDAO) {this.exerciseTargetDAO = exerciseTargetDAO;}

    public List<ExerciseTarget> getAllExerciseTargets() {
        return exerciseTargetDAO.getAllExerciseTargets();
    }

    public Optional<ExerciseTarget> getExerciseTargetById(int id) {
        return exerciseTargetDAO.getExerciseTargetById(id);
    }

    public void createExerciseTarget(ExerciseTarget exerciseTarget) {
        exerciseTargetDAO.createExerciseTarget(exerciseTarget);
    }

    public void updateExerciseTargetById(int id, ExerciseTarget exerciseTarget) {
        exerciseTargetDAO.updateExerciseTargetById(id, exerciseTarget);
    }

    public void deleteExerciseTargetById(int id) {
        exerciseTargetDAO.deleteExerciseTargetById(id);
    }
}
