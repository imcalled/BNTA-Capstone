package com.gainztracker.demo.Workouts;

import com.gainztracker.demo.Exercise.Exercise;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class WorkoutDataAccessService implements WorkoutDAO {

    private JdbcTemplate jdbcTemplate;


    public WorkoutDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Workout> getAllWorkouts() {
        String sql = """
                SELECT * FROM workouts;
                """;
        return jdbcTemplate.query(sql,new WorkoutRowMapper());
    }

    @Override
    public Optional<Workout> getWorkoutById(int id) {
        String sql = """
                SELECT * FROM workouts
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, new WorkoutRowMapper(),id)
                .stream()
                .findFirst();
    };

    @Override
    public int createWorkout(Workout workout) {
        String sql = """
                INSERT INTO workouts(name)
                VALUES(?);
                """;
        return jdbcTemplate.update(sql,workout.getName());
    }

    @Override
    public int deleteWorkoutById(int id) {
        String sql = """
                DELETE FROM workouts
                WHERE id = ?
                """;
        return jdbcTemplate.update(sql,id);
    };

}
