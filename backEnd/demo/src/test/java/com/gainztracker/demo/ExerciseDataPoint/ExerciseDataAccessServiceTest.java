package com.gainztracker.demo.ExerciseDataPoint;

import com.gainztracker.demo.Exercise.Exercise;
import com.gainztracker.demo.Exercise.ExerciseDataAccessService;
import com.gainztracker.demo.Exercise.ExerciseType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@DataJdbcTest

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ExerciseDataAccessServiceTest {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private ExerciseDataAccessService underTest;

    @BeforeAll
    void setup() {
        underTest = new ExerciseDataAccessService(jdbcTemplate);
//        jdbcTemplate.execute(
//                "INSERT INTO Exercise(name, ExerciseType ) VALUES ('Pushups', 'CALISTHENICS');"
//        );
    }
    @Test
    @DisplayName("Test to see if get getExerciseById() works")
    void getExerciseById() {
        //given
        Optional<Exercise> expected = Optional.of(new Exercise(6, "Pushups", ExerciseType.valueOf("CALISTHENICS")));

        //when
        Optional<Exercise> actual = underTest.getExerciseById(6);

        //then
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @DisplayName("Test to see if get getExerciseByName() works")
    void getExerciseByName() {
        //given
        Optional<Exercise> expected = Optional.of(new Exercise(6, "Pushups", ExerciseType.valueOf("CALISTHENICS")));

        //when
        Optional<Exercise> actual = underTest.getExerciseByName("Pushups");

        //then
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @DisplayName("Test to see if createExercise() works")
    void createExercise() {
        //given
        int expected = underTest.createExercise(new Exercise(16, "Hip Thrusts", ExerciseType.valueOf("WEIGHTS")));

//        //when
//        Optional<Exercise> actual = underTest.getExerciseByName("Hip Thrusts");

        //then
        assertThat(expected).isEqualTo(1);
    }

    @Test
    @DisplayName("Test to see if updateExerciseById() works")
    void updateExerciseById() {
        //given
        Exercise exercise = new Exercise(1, "Hip Thrusts", ExerciseType.valueOf("WEIGHTS"));
        int actual = underTest.updateExerciseById(1, exercise);

        //when
        Optional<Exercise> actualDB = underTest.getExerciseById(1);
        Optional<Exercise> expectedDB = Optional.of(exercise);

        //then
        assertThat(actual).isEqualTo(1);
        assertThat(actualDB).isEqualTo(expectedDB);
    }

    @Test
    @DisplayName("Test to see if updateExerciseByName() works")
    void updateExerciseByName() {
        //given
        Exercise exercise = new Exercise(12, "RDLs", ExerciseType.valueOf("WEIGHTS"));
        int actual = underTest.updateExerciseByName("Bench Press", exercise);

        //when
        Optional<Exercise> actualDB = underTest.getExerciseByName("RDLs");
        Optional<Exercise> expectedDB = Optional.of(exercise);

        //then
        assertThat(actual).isEqualTo(1);
        assertThat(actualDB).isEqualTo(expectedDB);
    }

    @Test
    @DisplayName("Test deleteExerciseById()")
    void deleteExerciseById() {
        //given
        int actual = underTest.deleteExerciseById(1);

        //when
        Optional<Exercise> actualDB = underTest.getExerciseById(1);

        //then
        assertThat(actual).isEqualTo(1);
        assertThat(actualDB).isEqualTo(Optional.empty());
    }

    @Test
    @DisplayName("Test deleteExerciseByName()")
    void deleteExerciseByName() {
        //given
        int actual = underTest.deleteExerciseByName("Treadmill");

        //when
        Optional<Exercise> actualDB = underTest.getExerciseByName("Treadmill");

        //then
        assertThat(actual).isEqualTo(1);
        assertThat(actualDB).isEqualTo(Optional.empty());
    }
}
