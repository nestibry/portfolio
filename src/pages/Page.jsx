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
            header = 'Portfolio';
            content = <h1>This is my portfolio content</h1>;
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
            { includeBackground && <BackgroundImage/ > }
            <div className='container'>
                <h2 className='header'>{header}</h2>
                <div className='divider'></div>
                <div className='content'>{content}</div>
            </div>
        </>
    )
}