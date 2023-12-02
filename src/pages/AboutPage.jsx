import { BackgroundImage } from '../components/';
import './AboutPage.css';


export default function AboutPage() {
    return (
        <>
            <BackgroundImage />

            <section className='main-sections' id='about-me'>
                <h2 className='section-header'>About Me</h2>
                <div className='section-content'>
                    <img className='profile-image' src='../src/assets/images/bryan-nestingen-profile-photo.jpg' alt="Bryan Nestingen's profile photo." />
                    <summary className='profile-summary'>
                        <p>
                            Naturally inquisitive, I go by 'Bryan with a Y' — a moniker that perfectly encapsulates my curiosity.
                        </p>
                        <p>
                            Key Points:
                        </p>
                        <ul>
                            <li><p>First and foremost, I'm a devoted father and husband.</p></li>
                            <li><p>As an avid outdoor enthusiast, I find immense joy in activities like hiking and mountain biking.</p></li>
                            <li><p>I am a versatile software engineer with a foundation in electrical engineering and a background in mathematics education. Seeking opportunities to leverage my expertise in software development, process automation, and full stack web development.</p></li>
                        </ul>
                        <p>
                        Feel free to reach out to explore more about my diverse background! I look forward to connecting with you.
                        </p>
                    </summary>
                </div>
            </section>
        </>
    )
}