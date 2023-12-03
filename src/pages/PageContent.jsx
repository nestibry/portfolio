import './PageContent.css';

export default function PageContent({ pageType }) {

    let pageHeader;
    let pageContent;

    switch (pageType) {
        case 'about':
            pageHeader = 'About Me';
            break;
        case 'portfolio':
            pageHeader = 'Portfolio';
            pageContent = <h1>This is my portfolio content</h1>;
            break;
        case 'resume':
            pageHeader = 'Resume';
            break;
        case 'contact':
            pageHeader = 'Contact';
            break;
        default:
            pageHeader = 'Page Not Found';
            pageContent = <h1>Page Not Found</h1>;
    }

    return (
        <>
            <div className='page-container'>
                <h2 className='page-header'>{pageHeader}</h2>
                <div className='page-divider'></div>
                <div className='page-content'>{pageContent}</div>
            </div>
        </>
    )
}