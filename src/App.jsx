import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

// Temporary Pages for site navigation
import { AboutPage, ContactPage, PortfolioPage, ResumePage, PageNotFound } from './pages/';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<AboutPage />} />
                    <Route path='/portfolio' element={<PortfolioPage />} />
                    <Route path='/resume' element={<ResumePage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


