import { NavLink } from "react-router-dom"

import './Footer.css';

export default function Footer() {

    return (
        <>
            <header>
                <NavLink to='/' className="navBrand">Bryan Nestingen</NavLink>
                <nav>
                    <NavLink to='/' className="navlinks">About Me</NavLink>
                    <NavLink to='/portfolio' className="navlinks">Portfolio</NavLink>
                    <NavLink to='/resume' className="navlinks">Resume</NavLink>
                    <NavLink to='/contact' className="navlinks">Contact</NavLink>
                </nav>
            </header>
        </>
    );
}