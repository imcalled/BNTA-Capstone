package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.jdbc.core.JdbcTemplate;

public class ExerciseDataPointDataAccessService implements ExerciseDataPointDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseDataPointDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int postCardio(ExerciseDataPoint exerciseDataPoint) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,timeAchieved, distanceAchieved)
                VALUES
                (?,?,?);
                """;
        return jdbcTemplate.update(sql, exerciseDataPoint.getTimeAchieved(), exerciseDataPoint.getDistanceAchieved());

    }

    @Override
    public int postCalisthenics(ExerciseDataPoint exerciseDataPoint) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,setsAchieved, repsAchieved)
                VALUES
                (?,?,?);
                """;
        return jdbcTemplate.update(sql, exerciseDataPoint.getSetsAchieved(), exerciseDataPoint.getRepsAchieved());

    }

    @Override
    public int postWeights(ExerciseDataPoint exerciseDataPoint) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,weightAchieved, setsAchieved, repsAchieved)
                VALUES
                (?,?,?,?);
                """;
        return jdbcTemplate.update(sql, exerciseDataPoint.getWeightAchieved(), exerciseDataPoint.getSetsAchieved(),exerciseDataPoint.getRepsAchieved());

    }



}
