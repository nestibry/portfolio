import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css';

export default function Footer() {

    return (

        <footer>
            <div className='footer-row footer-icon-row'>
                <NavLink to='/contact' className='footer-icon'>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </NavLink>
                <a className='footer-icon' target='_blank' rel='noopener noreferrer' href='https://github.com/nestibry'>
                    <FontAwesomeIcon className='icon-icon' icon="fa-brands fa-github" />
                </a>
                <a className='footer-icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/bryan-nestingen/'>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <a className='footer-icon' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/@BryanNestingen'>
                    <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a>
            </div>
            <div className='footer-row' >
                <a className='footer-copyright' target='_blank' rel='noopener noreferrer' href='https://vitejs.dev/'>Made with React and Vite</a>
            </div>
            <div className='footer-row' >
                <a className='footer-copyright' target='_blank' rel='noopener noreferrer' href='https://www.netlify.com/'>Hosted by Netlify</a>
            </div>
            <div className='footer-row' >
                <a className='footer-copyright' target='_blank' rel='noopener noreferrer' href='https://github.com/nestibry/portfolio'>© 2023 — Bryan Nestingen</a>
            </div>
        </footer>
    );
}