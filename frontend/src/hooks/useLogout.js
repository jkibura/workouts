import useAuthContext from './useAuthContext'
import { useWorkoutContext } from './useWorkoutContext'

export default function useLogout(){
    const { dispatch } = useAuthContext()
    const { dispatch: workoutDispatch } = useWorkoutContext()
    function logout(){
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS', payload: null})

        localStorage.removeItem('user')
    }
    return {logout}
}