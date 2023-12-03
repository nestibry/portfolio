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