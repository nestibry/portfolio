import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { portfolio } from "../assets/data/portfolio";

import './Portfolio.css';

export default function Portfolio() {

    return portfolio.map((item, index) => (

        <div className='project-card' key={item.id}>
            <a className='project-link' target='_blank' rel='noopener noreferrer' href={item.img_link}>
                <img className='project-image' src={`/images/${item.img}`} alt="Bryan Nestingen's profile photo." />
            </a>
            <div className='project-summary'>
                <h3>{item.name} </h3>
                <h6>{item.stack}</h6>
                {/* <p>{item.description}</p> */}

                <div className='project-links'>
                    {item.app.length ?
                        <p>
                            <a className='project-link-icon' target='_blank' rel='noopener noreferrer' href={item.app}>
                                <FontAwesomeIcon icon="fa-solid fa-rocket" />
                            </a>
                        </p>
                        : <></>}
                    {item.demo.length ?
                        <p>
                            <a className='project-link-icon' target='_blank' rel='noopener noreferrer' href={item.demo}>
                                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                            </a>
                        </p>
                        : <></>}
                    {item.repo.length ?
                        <p>
                            <a className='project-link-icon' target='_blank' rel='noopener noreferrer' href={item.repo}>
                                <FontAwesomeIcon className='icon-icon' icon="fa-brands fa-github" />
                            </a>
                        </p>
                        : <></>}
                </div>
            </div>
        </div>

    ));
}