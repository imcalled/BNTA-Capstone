package com.gainztracker.demo.ExerciseDataPoint;


import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;


public class ExerciseDataPointRowMapper implements RowMapper<ExerciseDataPoint> {

    @Override
    public ExerciseDataPoint mapRow(ResultSet rs, int rowNum) throws SQLException {
        ExerciseDataPoint exerciseDataPoint = new ExerciseDataPoint(
                rs.getInt("exerciseID"),
                LocalDate.parse(rs.getString("date")),
                rs.getInt("timeAchieved"),
                rs.getInt("distanceAchieved"),
                rs.getInt("setsAchieved"),
                rs.getInt("repsAchieved"),
                rs.getInt("weightAchieved")
        );
        return exerciseDataPoint;
    }
}