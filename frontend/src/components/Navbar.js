import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
 function handleClick(){
    logout()
    }

    return(
        <header className="container">
            <Link to="/">
                <h1>Gym bro</h1>
            </Link>
            <nav>
                {user && (<div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>)}
                {!user && (<div>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Log in</Link>
                </div>)}
            </nav>
        </header>
    )
}