package com.gainztracker.demo.Workouts;

import com.gainztracker.demo.Exercise.Exercise;

import java.util.List;
import java.util.Objects;

public class Workout {
    private String name;

    public Workout(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Workout workout = (Workout) o;
        return Objects.equals(name, workout.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "Workout{" +
                "name='" + name + '\'' +
                '}';
    }
}