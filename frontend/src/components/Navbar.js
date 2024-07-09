import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <header className='container'>
            <Link to="/">
            <h1>Gym bro</h1>
            </Link>
        </header>
    )
}