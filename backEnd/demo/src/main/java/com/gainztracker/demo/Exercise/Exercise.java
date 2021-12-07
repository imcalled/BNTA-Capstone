package com.gainztracker.demo.Exercise;

import java.util.Objects;

public class Exercise {
    private String name;
    private ExerciseType type;

    public Exercise(String name, ExerciseType type) {
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public ExerciseType getType() {
        return type;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "name='" + name + '\'' +
                ", type=" + type +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exercise exercise = (Exercise) o;
        return name.equals(exercise.name) && type == exercise.type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, type);
    }
}
