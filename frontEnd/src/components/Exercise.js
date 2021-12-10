const Exercise = ({exercise, dropSelect}) => {
    // console.log(exercise);
    return(
    <>
        <option value={exercise.id}>{exercise.name}</option>
    </>
    )
}
export default Exercise;