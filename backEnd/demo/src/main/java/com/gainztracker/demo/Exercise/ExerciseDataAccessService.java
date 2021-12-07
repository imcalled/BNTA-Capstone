package com.gainztracker.demo.Exercise;

import org.flywaydb.core.internal.jdbc.JdbcTemplate;
import org.flywaydb.core.internal.jdbc.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository("gainztracker")
public class ExerciseDataAccessService implements ExerciseDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper rowMapper = new RowMapper() {
        @Override
        public Object mapRow(ResultSet rs) throws SQLException {
            Exercise exercise = new Exercise(
                    rs.getInt("id"),
                    rs.getString("name"),
                    ExerciseType.valueOf(rs.getString("exerciseType"))
            );
            return exercise;
        };
    };

//    @Override
//    public List<Exercise> getAllExercises() {
//        String sql = """
//                    SELECT *
//                    FROM Exercise;
//                    """;
//        List<Exercise> exercise = jdbcTemplate.query(sql, new RowMapper<Exercise>());
//    };
}
