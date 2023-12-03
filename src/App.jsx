import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import { AboutPage, ContactPage, PortfolioPage, ResumePage, PageNotFound, Page } from './pages/';

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AboutPage />} />
                    <Route path='/portfolio' element={<Page type='portfolio' />} />
                    <Route path='/resume' element={<ResumePage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


