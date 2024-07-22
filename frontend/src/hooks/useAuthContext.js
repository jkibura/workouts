import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

function useAuthContext(){
    const context = useContext(AuthContext)
    if(!context){
        throw Error('useAuthContext only in elements wrapped inside AuthContextProvider')
    }

    return context
}

export default useAuthContext