import React from 'react';
import { BrowserRouter as Routes , Route, useLocation} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";

import {AnimatePresence} from 'framer-motion';

function AnimatedRouters() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/about" element={AboutMe}/>
                <Route exact path="/" element={HomePage}/>
            </Routes >
        </AnimatePresence>
    )
}

export default AnimatedRouters;