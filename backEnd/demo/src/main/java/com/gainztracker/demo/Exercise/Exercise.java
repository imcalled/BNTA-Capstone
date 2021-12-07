package com.gainztracker.demo.Exercise;

import java.util.Objects;

public class Exercise {
    private Integer id;
    private String name;
    private ExerciseType type;

    public Exercise(Integer id, String name, ExerciseType type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public Integer getId() {return id;}
    public String getName() {
        return name;
    }
    public ExerciseType getType() {
        return type;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(ExerciseType type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type=" + type +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exercise exercise = (Exercise) o;
        return Objects.equals(id, exercise.id) && Objects.equals(name, exercise.name) && type == exercise.type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, type);
    }
}
