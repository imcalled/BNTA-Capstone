package com.gainztracker.demo.ExerciseDataPoint;

import java.time.LocalDate;
import java.util.Objects;

public class ExerciseDataPoint {
    private int exerciseID;
    private LocalDate date ;
    private int timeAchieved;
    private int distanceAchieved;
    private int setsAchieved;
    private int repsAchieved;
    private int weightAchieved;

    public ExerciseDataPoint(int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved, int setsAchieved, int repsAchieved, int weightAchieved) {

        this.exerciseID = exerciseID;
        this.date = date;
        this.timeAchieved = timeAchieved;
        this.distanceAchieved =distanceAchieved;
        this.setsAchieved = setsAchieved;
        this.repsAchieved = repsAchieved;
        this.weightAchieved = weightAchieved;
    }

    public int getExerciseID() {
        return exerciseID;
    }

    public void setExerciseID(int exerciseID) {
        this.exerciseID = exerciseID;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getTimeAchieved() {
        return timeAchieved;
    }

    public void setTimeAchieved(int timeAchieved) {
        this.timeAchieved = timeAchieved;
    }

    public int getDistanceAchieved() {
        return distanceAchieved;
    }

    public void setDistanceAchieved(int distanceAchieved) {
        this.distanceAchieved = distanceAchieved;
    }

    public int getSetsAchieved() {
        return setsAchieved;
    }

    public void setSetsAchieved(int setsAchieved) {
        this.setsAchieved = setsAchieved;
    }

    public int getRepsAchieved() {
        return repsAchieved;
    }

    public void setRepsAchieved(int repsAchieved) {
        this.repsAchieved = repsAchieved;
    }

    public int getWeightAchieved() {
        return weightAchieved;
    }

    public void setWeightAchieved(int weightAchieved) {
        this.weightAchieved = weightAchieved;
    }

    @Override
    public String toString() {
        return "ExerciseDataPoint{" +
                "exerciseID=" + exerciseID +
                ", date=" + date +
                ", timeAchieved=" + timeAchieved +
                ", distanceAchieved=" + distanceAchieved +
                ", setsAchieved=" + setsAchieved +
                ", repsAchieved=" + repsAchieved +
                ", weightAchieved=" + weightAchieved +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ExerciseDataPoint)) return false;
        ExerciseDataPoint that = (ExerciseDataPoint) o;
        return exerciseID == that.exerciseID && timeAchieved == that.timeAchieved && distanceAchieved == that.distanceAchieved && setsAchieved == that.setsAchieved && repsAchieved == that.repsAchieved && weightAchieved == that.weightAchieved && Objects.equals(date, that.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(exerciseID, date, timeAchieved, distanceAchieved, setsAchieved, repsAchieved, weightAchieved);
    }
}
