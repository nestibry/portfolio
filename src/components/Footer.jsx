import { Link, NavLink } from "react-router-dom"

import './Footer.css';

export default function Footer() {

    return (

        <footer>
            <div className='footer-links'>
                <NavLink to='/contact' className='navlinks'>Message</NavLink>                
                <a className='navlinks' target='_blank' rel='noopener noreferrer' href='https://github.com/nestibry'>GitHub</a>
                <a className='navlinks' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/bryan-nestingen/'>LinkedIn</a>
                <a className='navlinks' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/@BryanNestingen'>YouTube</a>
            </div>
            <div className='footer-copyright' >
                <h6>Happy Trails and Get Outside! — © 2023 Bryan Nestingen</h6>
            </div>
        </footer>
    );
}