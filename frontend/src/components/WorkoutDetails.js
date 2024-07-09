
const WorkoutDetails = ({workout})=>{

    const handleDelete = async () => {
        const response = await fetch('api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = response.json()

        if(response.ok){
            console.log(json, 'deleted')
        }
    }

    return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p><strong>{workout.createdAt}</strong></p>
        <span onClick={handleDelete}className='material-symbols-outlined'>delete</span>
    </div>
    )
}

export default WorkoutDetails