package com.gainztracker.demo.ExerciseDataPoint;

import org.springframework.stereotype.Service;

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
}
