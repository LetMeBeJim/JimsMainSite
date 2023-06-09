import React from 'react';
import { BrowserRouter as Routes , Route, useLocation} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";

import {AnimatePresence} from 'framer-motion';

function AnimatedRouters() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/about" component={AboutMe}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/" component={HomePage}/>
            </Routes >
        </AnimatePresence>
    )
}

export default AnimatedRouters;
