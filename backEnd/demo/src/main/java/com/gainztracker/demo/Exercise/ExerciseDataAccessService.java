package com.gainztracker.demo.Exercise;

import com.gainztracker.demo.DataTransferObject.ExerciseDTO;
import com.gainztracker.demo.ExerciseTarget.ExerciseTarget;
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

    RowMapper ExercisesWithWorkoutIdRowMapper = new RowMapper() {
        @Override
        public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
            ExerciseDTO exerciseDTO = new ExerciseDTO(
                    rs.getString("exerciseName"),
                    rs.getInt("targetTime"),
                    rs.getInt("targetDistance"),
                    rs.getInt("targetSets"),
                    rs.getInt("targetReps"),
                    rs.getInt("targetWeight"),
                    ExerciseType.valueOf(rs.getString("exerciseType"))
            );
            return exerciseDTO;
        }
    };

    @Override
    public List<ExerciseDTO>getExercisesByWorkoutId(int id) {
        String sql = """
                SELECT Exercise.name AS "exerciseName",
                ExerciseTarget.time AS "targetTime",
                ExerciseTarget.distance AS "targetDistance", 
                ExerciseTarget.sets AS "targetSets",
                ExerciseTarget.reps AS "targetReps", 
                ExerciseTarget.weight AS "targetWeight",
                Exercise.exerciseType AS "exerciseType"
                FROM exercise 
                INNER JOIN ExerciseTarget ON Exercise.id = ExerciseTarget.exerciseID 
                WHERE ExerciseTarget.workoutID = ?
                """;
        List<ExerciseDTO> exercises = jdbcTemplate.query(sql,ExercisesWithWorkoutIdRowMapper, id);
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