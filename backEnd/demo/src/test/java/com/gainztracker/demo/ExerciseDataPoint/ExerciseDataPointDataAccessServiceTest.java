package com.gainztracker.demo.ExerciseDataPoint;

import org.assertj.core.api.AssertionsForClassTypes;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataJdbcTest
//@Sql({"classpath:test.sql"})
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class ExerciseDataPointDataAccessServiceTest {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private ExerciseDataPointDataAccessService underTest;

    @BeforeAll
    void setup(){
        underTest = new ExerciseDataPointDataAccessService(jdbcTemplate);
        jdbcTemplate.execute(
        " INSERT INTO ExerciseDataPoint(exerciseID,date,timeAchieved) VALUES ('1','2021-11-10','100'); ");
    }
    @Test
    @DisplayName("Test to see if getall function works")
    void getAll() {
        // given
        List<ExerciseDataPoint> expected = List.of(new ExerciseDataPoint(1, LocalDate.of(2021,11,10), 100,
                0, 0, 0, 0));

        // when
        List<ExerciseDataPoint> actual = underTest.getAll();

        // then
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @DisplayName("Test to see if cardio datapoint is posted")
    void postCardio() {
        // given
        int actual = underTest.postCardio(2, LocalDate.of(2021, 11, 10), 100, 100);

        // when
        List<ExerciseDataPoint> actualDB = underTest.getAll();
        List<ExerciseDataPoint> expectedDB = List.of(
                new ExerciseDataPoint(1, LocalDate.of(2021, 11, 10),100, 0, 0, 0, 0 ),
                new ExerciseDataPoint(2, LocalDate.of(2021, 11, 10),100, 100, 0, 0, 0 )
            );
        // then
        assertThat(actualDB).isEqualTo(expectedDB);
    }
}
