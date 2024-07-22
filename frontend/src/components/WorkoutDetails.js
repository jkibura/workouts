//import { Link } from 'react-router-dom'

//import formatDistanceToNow from 'date-fns/formatDistanceToNow'
//import parseISO from 'date-fns/parseISO'
import  { useWorkoutContext }  from "../hooks/useWorkoutContext"
//import { useWorkoutContext } from '../hooks/useWorkoutContext'
import useAuthContext from '../hooks/useAuthContext'
const WorkoutDetails = ({workout})=>{
    const { dispatch } = useWorkoutContext()
    const { user } = useAuthContext()

    const handleDelete = async () => {
        
        if(!user){
            return
        }

        const response = await fetch('api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    //const createdAtDate = parseISO(workout.createdAt)

    return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p><strong>{workout.createdAt}</strong></p>
        <span onClick={handleDelete}className='material-symbols-outlined'>
            delete</span>

            {/* <span onClick={handleDelete}className='material-symbols-outlined'>
            <Link to='/' reloadDocument>delete</Link></span> */}
    </div>
    )
}

//{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}
export default WorkoutDetails
