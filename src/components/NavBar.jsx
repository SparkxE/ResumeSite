import logo from '../assets/ALogo.png';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/history">Work History</a>
                </li>
                <li>
                    <a href="/education">Education</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;