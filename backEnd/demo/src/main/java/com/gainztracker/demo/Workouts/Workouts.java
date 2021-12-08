package com.gainztracker.demo.Workouts;

import com.gainztracker.demo.Exercise.Exercise;

import java.util.List;
import java.util.Objects;

public class Workouts {
    private String name;
    private List<Exercise> listOfExerciseTargets;

    public Workouts(String name, List<Exercise> listOfExerciseTargets) {
        this.name = name;
        this.listOfExerciseTargets = listOfExerciseTargets;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Exercise> getListOfExerciseTargets() {
        return listOfExerciseTargets;
    }

    public void setListOfExerciseTargets(List<Exercise> listOfExerciseTargets) {
        this.listOfExerciseTargets = listOfExerciseTargets;
    }

    @Override
    public String toString() {
        return "Workouts{" +
                "name='" + name + '\'' +
                ", listOfExerciseTargets=" + listOfExerciseTargets +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Workouts)) return false;
        Workouts workouts = (Workouts) o;
        return Objects.equals(name, workouts.name) && Objects.equals(listOfExerciseTargets, workouts.listOfExerciseTargets);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, listOfExerciseTargets);
    }
}
