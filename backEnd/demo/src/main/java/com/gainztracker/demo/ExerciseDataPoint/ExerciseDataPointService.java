package com.gainztracker.demo.ExerciseDataPoint;

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
