package com.gainztracker.demo.ExerciseDataPoint;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseDataPointService {

    private ExerciseDataPointDAO exerciseDataPointDAO;

    public ExerciseDataPointService(ExerciseDataPointDAO exerciseDataPointDAO) {
        this.exerciseDataPointDAO = exerciseDataPointDAO;
    }



    public void postCardio(ExerciseDataPoint exerciseDataPoint) {
        exerciseDataPointDAO.postCardio(exerciseDataPoint);

    }
    public void postCalisthenics(ExerciseDataPoint exerciseDataPoint) {
        exerciseDataPointDAO.postCalisthenics(exerciseDataPoint);


    }
    public void postWeights(ExerciseDataPoint exerciseDataPoint) {
        exerciseDataPointDAO.postWeights(exerciseDataPoint);

    }

    public List<ExerciseDataPoint> getAll() {
        return exerciseDataPointDAO.getAll();
    }

    public List<ExerciseDataPoint> getDataPointByExerciseID(int id) {
        return exerciseDataPointDAO.getDataPointByExerciseID(id);
    }
}
