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
                            Naturally inquisitive, "Bryan with a Y" is the perfect moniker for me.
                        </p>
                        <p>
                            Key Points:
                        </p>
                        <ul>
                        <li><p>First and foremost, I'm a devoted father and husband.</p></li>
                            <li><p>Being an avid outdoor enthusiast, I derive immense joy from hiking and mountain biking.</p></li>
                            <li><p>I possess extensive expertise as a Software Engineer and Machine Vision Engineer, with a foundation in Electrical Engineering and a background in teaching Mathematics at the secondary level.</p></li>
                        </ul>
                        <p>
                            Contact me to learn more about my eclectic background!
                        </p>
                    </summary>
                </div>
            </section>
        </>
    )
}