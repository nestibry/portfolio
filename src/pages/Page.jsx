import './Page.css';

import { Header, BackgroundImage } from '../components';

export default function Page({ type }) {

    let contentHeader;
    let content;
    let includeBackground = false;

    switch (type) {

        case 'about':
            contentHeader = 'About Me';
            content = <h1>This is my About Me content</h1>;
            includeBackground = true;
            break;

        case 'portfolio':
            contentHeader = 'Portfolio';
            content = <h1>This is my portfolio content</h1>;
            break;

        case 'resume':
            contentHeader = 'Resume';
            content = <h1>This is my Resume content</h1>;
            break;

        case 'contact':
            contentHeader = 'Contact';
            content = <h1>This is my Contact content</h1>;
            break;

        default:
            contentHeader = 'Page Not Found';
            content = <h1>Page Not Found</h1>;
    }

    return (
        <>  
            <Header />
            { includeBackground && <BackgroundImage/ > }
            <div className='content-container'>
                <h2 className='content-header'>{contentHeader}</h2>
                <div className='content-divider'></div>
                <div className='content-content'>{content}</div>
            </div>
        </>
    )
}