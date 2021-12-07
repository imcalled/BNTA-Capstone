package com.gainztracker.demo.ExerciseTarget;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ExerciseTargetDataAccessService implements ExerciseTargetDAO{

    private JdbcTemplate jdbcTemplate;

    public ExerciseTargetDataAccessService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper rowMapper = new RowMapper() {
        @Override
        public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
            ExerciseTarget exerciseTarget = new ExerciseTarget(
                    rs.getInt("exerciseID"),rs.getInt("time"),
                    rs.getInt("distance"),rs.getInt("sets"),
                    rs.getInt("reps"),rs.getInt("weight"));
            return exerciseTarget;
        }
    };

    @Override
    public List<ExerciseTarget> getAllExerciseTargets(){
        String sql = """
                SELECT * FROM ExerciseTarget
                """;
        List<ExerciseTarget> exerciseTarget = jdbcTemplate.query(sql,rowMapper);
        return exerciseTarget;
    };

    @Override
    public Optional<ExerciseTarget> getExerciseTargetById(int id) {
        String sql = """
                SELECT * FROM ExerciseTarget
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, rowMapper, id).stream().findFirst();
    };

    @Override
    public int createExerciseTarget(ExerciseTarget exerciseTarget){
      String sql = """
              INSERT INTO ExerciseTarget(exerciseID,time,distance,sets,reps,weight)int  VALUES(?,?,?,?,?,?)
              """;
      return jdbcTemplate.update(sql,exerciseTarget.getExercise_Id(),exerciseTarget.getTime()
              ,exerciseTarget.getDistance(),exerciseTarget.getSets()
              ,exerciseTarget.getReps(),exerciseTarget.getWeight());
    };

    @Override
    public int updateExerciseTargetById(int id,ExerciseTarget exerciseTarget){
        String sql = """
              UPDATE ExerciseTarget
              SET exerciseID = ?,time = ?,distance = ?,sets = ?,reps = ?,weight = ?
              WHERE id = ?
              """;
        return jdbcTemplate.update(sql,exerciseTarget.getExercise_Id(),exerciseTarget.getTime()
                ,exerciseTarget.getDistance(),exerciseTarget.getSets()
                ,exerciseTarget.getReps(),exerciseTarget.getWeight(),id);
    };

    @Override
    public int deleteExerciseTargetById(int id){
        String sql = """
                DELETE FROM ExerciseTarget
                WHERE id = ?
                """;
        return jdbcTemplate.update(sql,id);
    };
}
