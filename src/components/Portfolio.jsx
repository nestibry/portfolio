import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { portfolio } from "../assets/data/portfolio";

export default function Portfolio() {

    return portfolio.map((item, index) => (

        <div key={item.id}>
            <a className='footer-icon' target='_blank' rel='noopener noreferrer' href={item.app}>
                <img className='profile-image' src={`../src/assets/images/${item.img}`} alt="Bryan Nestingen's profile photo." />
            </a>
            <h3>{item.name} </h3>
            <p>{item.description}</p>
            <p>{item.stack}</p>
            <p>
                <a className='footer-icon' target='_blank' rel='noopener noreferrer' href={item.app}>
                <FontAwesomeIcon icon="fa-solid fa-rocket" />
                </a>
            </p>
            <p>
                <a className='footer-icon' target='_blank' rel='noopener noreferrer' href={item.repo}>
                    <FontAwesomeIcon className='icon-icon' icon="fa-brands fa-github" />
                </a>
            </p>
            {item.demo.length ?
                <p>
                    <a className='footer-icon' target='_blank' rel='noopener noreferrer' href={item.demo}>
                        <FontAwesomeIcon icon="fa-brands fa-youtube" />
                    </a>
                </p>
                : 'no demo'}
        </div>

    ));
}