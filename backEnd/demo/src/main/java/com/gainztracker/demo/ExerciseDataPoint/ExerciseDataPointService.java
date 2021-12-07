package com.gainztracker.demo.ExerciseDataPoint;

import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<ExerciseDataPoint> getAll(ExerciseDataPoint exerciseDataPoint) {
        return exerciseDataPointDAO.getAll(exerciseDataPoint);
    }
}
