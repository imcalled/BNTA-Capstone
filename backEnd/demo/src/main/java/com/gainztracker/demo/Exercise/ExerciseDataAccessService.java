package com.gainztracker.demo.Exercise;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ExerciseDataAccessService implements ExerciseDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper rowMapper = new RowMapper() {
        @Override
        public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
            Exercise exercise = new Exercise(
                    rs.getInt("id"),
                    rs.getString("name"),
                    ExerciseType.valueOf(rs.getString("exerciseType"))
            );
            return exercise;
        }
    };

    @Override
    public List<Exercise>getExercisesByWorkoutId(int id) {
        String sql = """
                SELECT exercise.name AS "exerciseName", exerciseTarget.time AS "targetTime",
                exerciseTarget.distance as "targetDistance", 
                exerciseTarget.sets AS "targetSets", exerciseTarget.reps AS "targetReps", 
                exerciseTarget.weight AS "targetWeight" FROM exercise 
                INNER JOIN exerciseTarget ON exercise.id = exerciseTarget.exerciseid 
                INNER JOIN workouts ON exerciseTarget.exerciseid = workouts.id;
                """;
        List<Exercise> exercises = jdbcTemplate.query(sql,rowMapper);
        return exercises;
    }

    @Override
    public List<Exercise> getAllExercises() {
        String sql = """
                    SELECT *
                    FROM Exercise
                    """;
        List<Exercise> exercise = jdbcTemplate.query(sql, rowMapper);
        return exercise;
    };

    @Override
    public Optional<Exercise> getExerciseById(int id) {
        String sql = """
                SELECT * FROM Exercise
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, rowMapper, id)
                .stream()
                .findFirst();
    };

    @Override
    public Optional<Exercise> getExerciseByName(String name) {
        String sql = """
                SELECT * FROM Exercise
                WHERE name = ?
                """;
        return jdbcTemplate.query(sql, rowMapper, name)
                .stream()
                .findFirst();
    };

    @Override
    public int createExercise(Exercise exercise) {
        String sql = """
                INSERT INTO Exercise(name, exerciseType)
                VALUES(?, ?::ExerciseType);
                """;
        return jdbcTemplate.update(sql, exercise.getName(), exercise.getExerciseType().toString());
    };

    @Override
    public int updateExerciseById(int id, Exercise exercise) {
        String sql = """
                UPDATE Exercise
                SET name = ?, exerciseType = ?::ExerciseType
                WHERE id = ?;
                """;
        return jdbcTemplate.update(sql, exercise.getName(), exercise.getExerciseType().toString(), id);
    };

    @Override
    public int updateExerciseByName(String name, Exercise exercise) {
        String sql = """
                UPDATE Exercise
                SET name = ?, exerciseType = ?::ExerciseType
                WHERE name = ?;
                """;
        return jdbcTemplate.update(sql, exercise.getName(), exercise.getExerciseType().toString(), name);
    };

    @Override
    public int deleteExerciseById(int id) {
        String sql = """
                DELETE FROM Exercise
                WHERE id = ?;
                """;
        return jdbcTemplate.update(sql, id);
    };

    @Override
    public int deleteExerciseByName(String name) {
        String sql = """
                DELETE FROM Exercise
                WHERE name = ?;
                """;
        return jdbcTemplate.update(sql, name);
    };
}