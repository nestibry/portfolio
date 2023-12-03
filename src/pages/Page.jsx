import './Page.css';

import { Header, BackgroundImage } from '../components';

export default function Page({ type }) {

    let header;
    let content;
    let includeBackground = false;

    switch (type) {

        case 'about':
            header = 'About Me';
            content = <h1>This is my About Me content</h1>;
            includeBackground = true;
            break;

        case 'portfolio':
            header = <h1>Portfolio</h1>;
            content = <>
                <div>
                    <img className='profile-image' src='../src/assets/images/bryan-nestingen-profile-photo.jpg' alt="Bryan Nestingen's profile photo." />
                    <summary>
                        <h6>
                            Naturally inquisitive, I go by 'Bryan with a Y' — a moniker that perfectly encapsulates my curiosity.
                        </h6>
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
                <div>
                    <h1>This is my portfolio content</h1>
                    <h2>This is my portfolio content</h2>
                    <h3>This is my portfolio content</h3>
                </div>
                <div>
                    <h1>This is my portfolio content</h1>
                    <h2>This is my portfolio content</h2>
                    <h3>This is my portfolio content</h3>
                </div>
            </>;
            break;

        case 'resume':
            header = 'Resume';
            content = <h1>This is my Resume content</h1>;
            break;

        case 'contact':
            header = 'Contact';
            content = <h1>This is my Contact content</h1>;
            break;

        default:
            header = 'Page Not Found';
            content = <h1>Page Not Found</h1>;
    }

    return (
        <>
            <Header />
            {includeBackground && <BackgroundImage />}
            <div className='page-container'>
                <div className='page-header'>{header}</div>
                <div className='page-divider'></div>
                <div className='page-content'>{content}</div>
            </div>
        </>
    )
}