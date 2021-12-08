package com.gainztracker.demo.Workouts;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class WorkoutDataAccessService implements WorkoutDAO {

    private JdbcTemplate jdbcTemplate;


    public WorkoutDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Workout> getAllWorkouts() {
        String sql = """
                SELECT * FROM Workouts;
                """;
        return jdbcTemplate.query(sql,new WorkoutRowMapper());
    }

    @Override
    public int createWorkout(Workout workout) {
        String sql = """
                INSERT INTO Workouts(name)
                VALUES(?);
                """;
        return jdbcTemplate.update(sql,workout.getName());
    }

    
}
