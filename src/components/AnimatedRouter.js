import React from 'react';
import { BrowserRouter as Switch , Route, useLocation} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";

import {AnimatePresence} from 'framer-motion';

function AnimatedRouters() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Switch  location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutMe}/>
            </Switch >
        </AnimatePresence>
    )
}

export default AnimatedRouters;