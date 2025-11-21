import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex justify-between">
            <Link to="/"><img src="https://vtourist.com.vn/wp-content/uploads/2024/04/logosocial-1-1.png" width={180} alt="" /></Link>
            <ul className="flex text-xl font-bold">
                <li className="py-2 px-5 text-blue-900 hover:text-white hover:bg-blue-500 hover:rounded-lg">
                <Link to="/">Home</Link>
                </li>
                <li className="py-2 px-5 text-blue-900 hover:text-white hover:bg-blue-500 hover:rounded-lg">
                <NavLink to="/about">About</NavLink> 
                </li>
                <li className="py-2 px-5 text-blue-900 hover:text-white hover:bg-blue-500 hover:rounded-lg">
                <a href="/">Booking</a>
                </li>
                <li className="py-2 px-5 text-blue-900 hover:text-white hover:bg-blue-500 hover:rounded-lg">
                <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;