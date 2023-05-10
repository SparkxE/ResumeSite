import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className='container'>
            <ul role="listbox">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/history">Work History</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;