import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Profile.css';

export default function Resume() {

    return (
        <div className='resume-container'>
            <div className='tech-stack-card'>
                <h3>Tech Stack</h3>
                <ul>
                    <li>HTML, CSS, JavaScript, Python, C#</li>
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
                <h3>Resume</h3>
                <div className='resume-icons'>

                </div>
            </div>
        </div>
    )
}