import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="my-2">
        <ul className="flex justify-around text-xl font-bol">
            <li className="hover:text-blue-600">
            <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600">
            <NavLink to="/about">About</NavLink> 
            </li>
            <li className="hover:text-blue-600">
            <a href="/">Booking</a>
            </li>
            <li className="hover:text-blue-600">
            <a href="/">Contact</a>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;