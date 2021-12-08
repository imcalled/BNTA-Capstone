package com.gainztracker.demo.ExerciseTarget;

import java.util.Objects;

public class ExerciseTarget {
    private int exercise_Id;
    private int time;
    private int distance;
    private int sets;
    private int reps;
    private int weight;

    public ExerciseTarget(int exercise_Id, int time, int distance, int sets, int reps, int weight) {

        this.exercise_Id = exercise_Id;
        this.time = time;
        this.distance = distance;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;

    }

    public int getExercise_Id() {
        return exercise_Id;
    }

    public void setExercise_Id(int exercise_Id) {
        this.exercise_Id = exercise_Id;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "ExerciseTarget{" +
                "exercise_Id=" + exercise_Id +
                ", time=" + time +
                ", distance=" + distance +
                ", sets=" + sets +
                ", reps=" + reps +
                ", weight=" + weight +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ExerciseTarget)) return false;
        ExerciseTarget that = (ExerciseTarget) o;
        return exercise_Id == that.exercise_Id && time == that.time && distance == that.distance && sets == that.sets && reps == that.reps && weight == that.weight;
    }

    @Override
    public int hashCode() {
        return Objects.hash(exercise_Id, time, distance, sets, reps, weight);
    }
}
