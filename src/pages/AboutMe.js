// import React, { useState } from "react";
import React from "react";
import EntryTransition from "../components/EntryTransition";
import FillerLeft from "../components/FillerLeft";
import FillerRight from "../components/FillerRight";
import {motion} from 'framer-motion';
import './AboutMe.css';
import AboutMeBox from "../components/AboutMeBox";



const AboutMe = () => {

    // const [is1Hovered, setIs1Hovered] = useState(false);
    // const [is2Hovered, setIs2Hovered] = useState(false);
    // const [is3Hovered, setIs3Hovered] = useState(false);
    // const [is4Hovered, setIs4Hovered] = useState(false);
    // const [is5Hovered, setIs5Hovered] = useState(false);
    return (
        <>
            <EntryTransition>
            </EntryTransition>
            <motion.div className="row"
                initial={{ opacity: 0}}
                animate={{ opacity: [0, 0, 1] }}
                transition={{ duration: 1 }}
            >
                <FillerLeft className="col"></FillerLeft>
                <div className="col bg-[#f7fcf2] font-mono font-medium w-screen pl-6 pt-6">
                    <div className="row">
                        <h1 className="font-mono font-extrabold text-9xl">My personal</h1>
                        <h1 className="font-mono font-extrabold text-9xl">projects.</h1>
                    </div>
                    <div className="row h-[10%]"></div>
                    <div className="row">
                        <AboutMeBox 
                            link="https://hellojimyao.com/"
                            logo="coffee"
                            description="Website to host my recipes"
                        ></AboutMeBox>

                        <AboutMeBox 
                            link="https://github.com/LetMeBeJim/LilJasper_2.0"
                            logo="coffee"
                            description="A discord slash bot to fetch my tasks!"
                        ></AboutMeBox>

                        <AboutMeBox 
                            link="https://github.com/LetMeBeJim/solana"
                            logo="coffee"
                            description="Practice solana dApp twitter for friends"
                        ></AboutMeBox>

                        <AboutMeBox 
                            link="https://github.com/LetMeBeJim/JimsRecipeSite"
                            logo="coffee"
                            description="A NodeJS backend for my recipe site"
                        ></AboutMeBox>
                    </div>
                </div>
                    
                <FillerRight className="col"></FillerRight>
            </motion.div>    
        </>
    );
};

export default AboutMe;