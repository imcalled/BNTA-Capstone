package com.gainztracker.demo.Workouts;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;

public class WorkoutRowMapper implements RowMapper<Workout> {

    @Override
    public Workout mapRow(ResultSet rs, int rowNum) throws SQLException {
        Workout workout = new Workout(rs.getString("name"));
        return workout;
    }
}
