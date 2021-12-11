package com.gainztracker.demo.Exercise;

import com.gainztracker.demo.DataTransferObject.ExerciseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {

    private ExerciseDAO exerciseDAO;

    @Autowired
    public ExerciseService(ExerciseDAO exerciseDAO) {
        this.exerciseDAO = exerciseDAO;
    }

    public List<Exercise> getAllExercises() {
        return exerciseDAO.getAllExercises();
    }

    public Optional<Exercise> getExerciseById(int id) {
        return exerciseDAO.getExerciseById(id);
    }

    public Optional<Exercise> getExerciseByName(String name) {
        return exerciseDAO.getExerciseByName(name);
    }

    public void createExercise(Exercise exercise) {
        exerciseDAO.createExercise(exercise);
    }

    public void updateExerciseById(int id, Exercise exercise) {
        exerciseDAO.updateExerciseById(id, exercise);
    }

    public void updateExerciseByName(String name, Exercise exercise) {
        exerciseDAO.updateExerciseByName(name, exercise);
    }

    public void deleteExerciseById(int id) {
        exerciseDAO.deleteExerciseById(id);
    }

    public void deleteExerciseByName(String name) {
        exerciseDAO.deleteExerciseByName(name);
    }

    public List<ExerciseDTO> getExercisesByWorkoutId(int id) { return exerciseDAO.getExercisesByWorkoutId(id); }
}
