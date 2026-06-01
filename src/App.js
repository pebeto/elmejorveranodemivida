import React from 'react';
import {
    Route,
    Routes,
    HashRouter,
} from 'react-router-dom';

import Main from './pages/Main';
import Merch from './pages/merch/Merch';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Presskit from './pages/presskit/Presskit';

import './app.css';

const App = () => {
    return (
        <HashRouter>
            <div className="container mx-auto px-3 max-w-6xl">
                <div className="header">
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="merch" element={<Merch />} />
                    <Route path="presskit" element={<Presskit />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </HashRouter>
    );
};

export default App;