package com.gainztracker.demo.ExerciseTarget;

import com.gainztracker.demo.Exercise.Exercise;
import com.gainztracker.demo.Exercise.ExerciseType;
import com.gainztracker.demo.ExerciseDataPoint.ExerciseDataPoint;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.InstanceOfAssertFactories.optional;

@ExtendWith(SpringExtension.class)
@DataJdbcTest

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ExerciseTargetDataAccessServiceTest {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private ExerciseTargetDataAccessService underTest;

    @BeforeAll
    void setup(){
        underTest = new ExerciseTargetDataAccessService(jdbcTemplate);
        jdbcTemplate.execute(
                " INSERT INTO ExerciseTarget(exerciseID, time, distance, sets, reps, weight) VALUES ('1','100', '100', '0', '0', '0'); ");
    }

    @Test
    @DisplayName("Test to see if getAllExerciseTargets function works")
    void getAllExerciseTargets() {
        // given
        List<ExerciseTarget> expected = List.of(new ExerciseTarget(1, 100, 100, 0, 0, 0, 0));

        // when
        List<ExerciseTarget> actual = underTest.getAllExerciseTargets();

    }
    @Test
    @DisplayName("Test to see if getExerciseTargetById works")
    void getExerciseTargetById() {
        //given

        Optional<ExerciseTarget> expected = Optional.of(new ExerciseTarget(1, 100, 100, 0, 0, 0,0));


        //when
        Optional<ExerciseTarget> actual = underTest.getExerciseTargetById(1);


        //then
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @DisplayName("Test to see if updateExerciseTargetById() works")
    void updateExerciseTargetById() {
        //given

        ExerciseTarget exerciseTarget = new ExerciseTarget(1, 100, 100, 0, 0, 0,0);

        int actual = underTest.updateExerciseTargetById(1, exerciseTarget);

        //when
        Optional<ExerciseTarget> actualDB = underTest.getExerciseTargetById(1);
        Optional<ExerciseTarget> expectedDB = Optional.of(exerciseTarget);

        //then
        assertThat(actual).isEqualTo(1);
        assertThat(actualDB).isEqualTo(expectedDB);

    }
        @Test
        @DisplayName("Test deleteExerciseTargetById()")
        void deleteExerciseTargetById() {
            //given
            int actual = underTest.deleteExerciseTargetById(1);

            //when
//            Optional<ExerciseTarget> actualDB = underTest.deleteExerciseTargetById(1);

            //then
            assertThat(actual).isEqualTo(1);
//            assertThat(actualDB).isEqualTo(Optional.empty());
        }
    }

