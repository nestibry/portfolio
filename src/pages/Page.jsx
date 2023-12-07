import './Page.css';


import {
    Header,
    BackgroundImage,
    Profile,
    Portfolio,
    Resume,
    Footer
}
from '../components';


export default function Page({ type }) {

    let header;
    let content;
    let includeBackground = false;

    switch (type) {

        case 'home':
            header = 'About Me';
            content = <Profile />
            includeBackground = true;
            break;

        case 'portfolio':
            header = 'Portfolio';
            content = <Portfolio />;
            break;

        case 'resume':
            header = 'Resume';
            content = <Resume />;
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
                <div className='page-header'><h2>{header}</h2></div>
                <div className='page-divider'></div>
                <div className='page-content'>{content}</div>
            </div>
            <Footer />
        </>
    )
}