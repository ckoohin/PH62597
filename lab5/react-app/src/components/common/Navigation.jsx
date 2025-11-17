import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="my-2">
        <ul className="flex justify-around text-xl font-bold">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <NavLink to="/about">About</NavLink> 
            </li>
            <li>
            <a href="/">Booking</a>
            </li>
            <li>
            <a href="/">Contact</a>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;