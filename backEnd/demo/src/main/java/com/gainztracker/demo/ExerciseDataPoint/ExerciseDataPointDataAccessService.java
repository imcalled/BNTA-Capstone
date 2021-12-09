package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public class ExerciseDataPointDataAccessService implements ExerciseDataPointDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseDataPointDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ExerciseDataPoint> getAll(){
        String sql= """
                SELECT * FROM ExerciseDataPoint;
                """;

        List<ExerciseDataPoint> getAll = jdbcTemplate.query(sql, new ExerciseDataPointRowMapper());
        return getAll;

    }

    @Override
    public List<ExerciseDataPoint> getDataPointByExerciseID(int id){
        String sql= """
                SELECT * FROM ExerciseDataPoint WHERE exerciseID = (?);
                """;
        return jdbcTemplate.query(sql,new ExerciseDataPointRowMapper(),id);


    }
    @Override
    public List<ExerciseDataPoint> getDataPointByExerciseName(String name){
        String sql= """
                SELECT * FROM ExerciseDataPoint INNER JOIN Exercise ON
                ExerciseDataPoint.exerciseID = Exercise.id WHERE Exercise.name = (?);
                 
                """;
        return jdbcTemplate.query(sql,new ExerciseDataPointRowMapper(),name);


    }

    @Override
    public int postCardio(int exerciseID, LocalDate date, int timeAchieved, int distanceAchieved) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,date,timeAchieved, distanceAchieved, setsAchieved, repsAchieved, weightAchieved)
                VALUES
                (?,?,?,?, 0, 0, 0);
                """;
        return jdbcTemplate.update(
                sql,
                exerciseID,
                date,
                timeAchieved,
                distanceAchieved);

    }

    @Override
    public int postCalisthenics(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,date,timeAchieved, distanceAchieved, setsAchieved, repsAchieved, weightAchieved)
                VALUES
                (?,?,0,0,?,?,0);
                """;
        return jdbcTemplate.update(
                sql,
                exerciseID ,
                date,
                setsAchieved,
                repsAchieved);

    }

    @Override
    public int postWeights(int exerciseID, LocalDate date, int setsAchieved, int repsAchieved, int weightAchieved) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,date,timeAchieved, distanceAchieved, setsAchieved, repsAchieved, weightAchieved)
                VALUES
                (?,?,0,0,?,?,?);
                """;
        return jdbcTemplate.update(
                sql,
                exerciseID,
                date,
                setsAchieved,
                repsAchieved,
                weightAchieved);

//         return jdbcTemplate.update(sql,
//                 exerciseDataPoint.getWeightAchieved(),
//                 exerciseDataPoint.getSetsAchieved(),
//                 exerciseDataPoint.getRepsAchieved());


    }

}
