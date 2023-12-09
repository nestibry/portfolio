import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Resume.css';

export default function Resume() {

    return (
        <div className='resume-container'>
            <div className='resume-card'>
                <h3>Tech Stack</h3>
                <ul>
                    <li>HTML, CSS, JavaScript, Python, C#, PowerShell</li>
                    <li>Bootstrap and other CSS frameworks</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB, Mongoose</li>
                    <li>MSSQL, MySQL, Sequelize</li>
                    <li>Jest</li>
                    <li>Cognex InSight</li>
                    <li>Savigent Workflow</li>
                    <li>Power Apps, Power Automate, Power BI</li>
                </ul>
            </div>
            <div className='resume-card'>
                <h3>Links to Resume</h3>
                <div className='resume-links'>
                    <a className='resume-icon' href='/Resume__Bryan Nestingen__.pdf' download>
                        <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />

                    </a>
                    <a className='resume-icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/bryan-nestingen/'>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                </div>
            </div>
        </div>
    )
}