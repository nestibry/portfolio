import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-card'>
            <a href='../src/assets/images/bryan-nestingen-profile-photo.jpg' download>
                <img className='profile-image' src='../src/assets/images/bryan-nestingen-profile-photo.jpg' alt="Bryan Nestingen's profile photo." />
            </a>
            <summary className='profile-summary'>
                <p>
                    Naturally inquisitive, I go by 'Bryan with a Y' — a moniker that perfectly encapsulates my curiosity.
                </p>
                <p>
                    Key Points:
                </p>
                <ul>
                    <li>First and foremost, I'm a devoted father and husband.</li>
                    <li>As an avid outdoor enthusiast, I find immense joy in activities like hiking and mountain biking.</li>
                    <li>I am a versatile software engineer with a foundation in electrical engineering and a background in mathematics education. Seeking opportunities to leverage my expertise in software development, process automation, and full stack web development.</li>
                </ul>
                <p>
                    Feel free to reach out to explore more about my diverse background! I look forward to connecting with you.
                </p>
            </summary>
        </div>
    )
}