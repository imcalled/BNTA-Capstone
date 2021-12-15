package com.gainztracker.demo.ExerciseDataPoint;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

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
    public int postDataPoint(ExerciseDataPoint exerciseDataPoint) {
        String sql="""
                INSERT INTO ExerciseDataPoint(exerciseID,date,timeAchieved, distanceAchieved, setsAchieved, repsAchieved, weightAchieved)
                VALUES
                (?,?,?,?,?,?,?);
                """;
        return jdbcTemplate.update(
                sql,
                exerciseDataPoint.getExerciseID(),
                exerciseDataPoint.getDate(),
                exerciseDataPoint.getTimeAchieved(),
                exerciseDataPoint.getDistanceAchieved(),
                exerciseDataPoint.getSetsAchieved(),
                exerciseDataPoint.getRepsAchieved(),
                exerciseDataPoint.getWeightAchieved());
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
