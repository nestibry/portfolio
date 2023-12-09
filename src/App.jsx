import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faRocket, faFileArrowDown, faFileCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelope, faGithub, faLinkedin, faYoutube, faRocket, faFileArrowDown, faFileCircleXmark);


import { Page } from './pages/';

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Page type='home' />} />
                    <Route path='/portfolio' element={<Page type='portfolio' />} />
                    <Route path='/resume' element={<Page type='resume' />} />
                    <Route path='/contact' element={<Page type='contact' />} />
                    <Route path='/*' element={<Page type='page-not-found' />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


