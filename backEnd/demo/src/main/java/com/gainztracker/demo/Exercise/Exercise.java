package com.gainztracker.demo.Exercise;

import java.util.Objects;

public class Exercise {
    private Integer id;
    private String name;
    private ExerciseType exerciseType;

    public Exercise(Integer id, String name, ExerciseType exerciseType) {
        this.id = id;
        this.name = name;
        this.exerciseType = exerciseType;
    }

    public Integer getId() {return id;}
    public String getName() {
        return name;
    }
    public ExerciseType getExerciseType() {
        return exerciseType;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setExerciseType(ExerciseType exerciseType) {
        this.exerciseType = exerciseType;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type=" + exerciseType +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exercise exercise = (Exercise) o;
        return Objects.equals(id, exercise.id) && Objects.equals(name, exercise.name) && exerciseType == exercise.exerciseType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, exerciseType);
    }
}
