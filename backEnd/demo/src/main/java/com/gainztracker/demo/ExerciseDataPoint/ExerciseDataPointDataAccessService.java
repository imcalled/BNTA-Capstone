package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ExerciseDataPointDataAccessService implements ExerciseDataPointDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseDataPointDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ExerciseDataPoint> getAll(ExerciseDataPoint exerciseDataPoint){
        String sql= """
                SELECT * FROM ExerciseDataPoint;
                """;

        List<ExerciseDataPoint> x = jdbcTemplate.query(sql, new ExerciseDataPointRowMapper());
        return x;

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
