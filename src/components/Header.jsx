import { NavLink } from "react-router-dom"

import './Header.css';

export default function Header() {

    return (
        <header>
            <NavLink to='/' className="navBrand">Bryan Nestingen</NavLink>
            <nav>
                <NavLink to='/' className="navlinks">About Me</NavLink>
                <NavLink to='/portfolio' className="navlinks">Portfolio</NavLink>
                <NavLink to='/resume' className="navlinks">Resume</NavLink>
                <NavLink to='/contact' className="navlinks">Contact</NavLink>
            </nav>
        </header>
    );
}