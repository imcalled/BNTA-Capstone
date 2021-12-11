package com.gainztracker.demo.DataTransferObject;

import com.gainztracker.demo.Exercise.ExerciseType;

import java.util.Objects;

public class ExerciseDTO {
    private String name;
    private int targetTime;
    private int targetDistance;
    private int targetSets;
    private int targetReps;
    private int targetWeight;
    private ExerciseType exerciseType;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ExerciseDTO{" +
                "name='" + name + '\'' +
                ", targetTime=" + targetTime +
                ", targetDistance=" + targetDistance +
                ", targetSets=" + targetSets +
                ", targetReps=" + targetReps +
                ", targetWeight=" + targetWeight +
                ", exerciseType=" + exerciseType +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExerciseDTO that = (ExerciseDTO) o;
        return targetTime == that.targetTime && targetDistance == that.targetDistance && targetSets == that.targetSets && targetReps == that.targetReps && targetWeight == that.targetWeight && Objects.equals(name, that.name) && exerciseType == that.exerciseType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, targetTime, targetDistance, targetSets, targetReps, targetWeight, exerciseType);
    }

    public int getTargetTime() {
        return targetTime;
    }

    public void setTargetTime(int targetTime) {
        this.targetTime = targetTime;
    }

    public int getTargetDistance() {
        return targetDistance;
    }

    public void setTargetDistance(int targetDistance) {
        this.targetDistance = targetDistance;
    }

    public int getTargetSets() {
        return targetSets;
    }

    public void setTargetSets(int targetSets) {
        this.targetSets = targetSets;
    }

    public int getTargetReps() {
        return targetReps;
    }

    public void setTargetReps(int targetReps) {
        this.targetReps = targetReps;
    }

    public int getTargetWeight() {
        return targetWeight;
    }

    public void setTargetWeight(int targetWeight) {
        this.targetWeight = targetWeight;
    }

    public ExerciseType getExerciseType() {
        return exerciseType;
    }

    public void setExerciseType(ExerciseType exerciseType) {
        this.exerciseType = exerciseType;
    }

    public ExerciseDTO(String name, int targetTime, int targetDistance, int targetSets, int targetReps, int targetWeight, ExerciseType exerciseType) {
        this.name = name;
        this.targetTime = targetTime;
        this.targetDistance = targetDistance;
        this.targetSets = targetSets;
        this.targetReps = targetReps;
        this.targetWeight = targetWeight;
        this.exerciseType = exerciseType;
    }
}