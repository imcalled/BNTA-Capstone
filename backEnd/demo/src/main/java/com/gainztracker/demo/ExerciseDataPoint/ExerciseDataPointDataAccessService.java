package com.gainztracker.demo.ExerciseDataPoint;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ExerciseDataPointDataAccessService implements ExerciseDataPointDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseDataPointDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int postCardio(ExerciseDataPoint exerciseDataPoint) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,date,timeAchieved)
                VALUES
                (?,?,?);
                """;
        return jdbcTemplate.update(
                sql,
                exerciseDataPoint.getExerciseID(),
                exerciseDataPoint.getDate(),
                exerciseDataPoint.getTimeAchieved());

    }

    @Override
    public int postCalisthenics(ExerciseDataPoint exerciseDataPoint) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,setsAchieved, repsAchieved)
                VALUES
                (?,?,?);
                """;
        return jdbcTemplate.update(sql,
                exerciseDataPoint.getExerciseID() ,
                exerciseDataPoint.getSetsAchieved(),
                exerciseDataPoint.getRepsAchieved());

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
