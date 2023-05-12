import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className='container'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/history">Work History</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Info</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;