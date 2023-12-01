import { Link } from "react-router-dom"

import './Header.css';

export default function Header() {

    return (
        <>
            <header>
                <h1>Bryan Nestingen</h1>
                <nav>
                    <>
                        <Link to='/contact' className="navlinks">About Me</Link>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#resume">Resume</a>
                        <a href="#contact">Contact</a>
                    </>
                </nav>
            </header>
        </>
    );

}