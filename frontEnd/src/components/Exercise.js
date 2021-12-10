const Exercise = ({exercise}) => {
    // console.log(exercise);
    return(
    <>
        <option value="${exercise.id}">{exercise.name}</option>
        {/* <p>{exercise.name}</p> */}
    </>
    )
}
export default Exercise;