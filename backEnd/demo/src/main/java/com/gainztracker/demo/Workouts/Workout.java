package com.gainztracker.demo.Workouts;

import com.gainztracker.demo.Exercise.Exercise;

import java.util.List;
import java.util.Objects;

public class Workout {
    private int id;
    private String name;

    public Workout(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Workout{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Workout)) return false;
        Workout workout = (Workout) o;
        return id == workout.id && Objects.equals(name, workout.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}