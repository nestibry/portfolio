import './AboutPage.css';

export default function AboutPage() {
    return (
        <>
            <section >
                <div className="background-image" title="Shenandoah National Park, Photo Credits, Bryan Nestingen"></div>
            </section>

            <section className="main-sections" id="about-me">
                <h2 className='section-header'>About Me</h2>
                <div className="section-content">
                    <img src='../src/assets/images/bryan-nestingen-profile-photo.jpg' alt="Bryan Nestingen's profile photo." />
                    <summary>
                        <p>
                            Naturally inquisitive, "Bryan with a Y" is the perfect moniker for me.
                        </p>
                        <p>
                            Key Points:
                        </p>
                        <ul>
                            <li>First and foremost, I'm a devoted father and husband.</li>
                            <li>Being an avid outdoor enthusiast, I derive immense joy from hiking and mountain biking.</li>
                            <li>I possess extensive expertise as a Software Engineer and Machine Vision Engineer, with a foundation in Electrical Engineering and a background in teaching Mathematics at the secondary level.</li>
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