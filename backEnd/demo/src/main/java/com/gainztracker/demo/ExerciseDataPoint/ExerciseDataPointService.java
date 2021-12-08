package com.gainztracker.demo.ExerciseDataPoint;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExerciseDataPointService {

    private ExerciseDataPointDAO exerciseDataPointDAO;

    public ExerciseDataPointService(ExerciseDataPointDAO exerciseDataPointDAO) {
        this.exerciseDataPointDAO = exerciseDataPointDAO;
    }



    public void postCardio(int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved) {
        exerciseDataPointDAO.postCardio(exerciseID, date, timeAchieved, distanceAchieved);

    }
    public void postCalisthenics(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved) {
        exerciseDataPointDAO.postCalisthenics(exerciseID, date, setsAchieved, repsAchieved);


    }
    public void postWeights(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved, int weightAchieved) {
        exerciseDataPointDAO.postWeights(exerciseID, date, setsAchieved, repsAchieved, weightAchieved);

    }

    public List<ExerciseDataPoint> getAll() {
        return exerciseDataPointDAO.getAll();
    }
}
