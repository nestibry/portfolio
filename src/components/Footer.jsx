import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css';

export default function Footer() {

    return (

        <footer>
            <div className='footer-links'>
                <NavLink to='/contact' className='navlinks'>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" size="xl" />
                </NavLink>
                <a className='navlinks' target='_blank' rel='noopener noreferrer' href='https://github.com/nestibry'>
                    <FontAwesomeIcon icon="fa-brands fa-github" size="xl" />
                </a>
                <a className='navlinks' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/bryan-nestingen/'>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" />
                </a>
                <a className='navlinks' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/@BryanNestingen'>
                    <FontAwesomeIcon icon="fa-brands fa-youtube" size="xl"/>
                </a>
            </div>
            <div className='footer-copyright' >
                <h6>Happy Trails and Get Outside! — © 2023 Bryan Nestingen</h6>
            </div>
        </footer>
    );
}