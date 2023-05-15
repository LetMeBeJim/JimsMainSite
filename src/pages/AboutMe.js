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
                    <div className="row h-[10%]"></div>

                    <div className="row pb-12 pl-[100px]">
                        <h1 className="font-mono font-extrabold text-9xl">My personal</h1>
                        <h1 className="font-mono font-extrabold text-9xl">projects.</h1>
                    </div>
                    <div className="row pl-[100px]">
                        <p className="font-mono text-left w-4/12">Here is a showcase of my various projects. Websites are linked to the actual website, the rest is linked to my github pages.<br/> <br/>There are more, but I need to find a more interesting way of displaying them.</p>
                    </div>
                    <div className="row h-[10%]"></div>
                    <div className="row flex justify-center">
                        <AboutMeBox 
                            topColor="#ffffff"
                            bottomColor="#e8ffc4"
                            link="https://hellojimyao.com/"
                            logo="carrot"
                            description="A website to host my recipes"
                        ></AboutMeBox>

                        <AboutMeBox 
                            topColor="#ffffff"
                            bottomColor="#ff985c"
                            link="https://github.com/LetMeBeJim/LilJasper_2.0"
                            logo="fa-brands fa-discord"
                            description="A discord slash bot to fetch my tasks!"
                        ></AboutMeBox>

                        <AboutMeBox 
                            topColor="#ffffff"
                            bottomColor="#BBD915"
                            link="https://github.com/LetMeBeJim/solana"
                            logo="comment"
                            description="Practice solana dApp twitter for my friends"
                        ></AboutMeBox>

                        <AboutMeBox 
                            topColor="#ffffff"
                            bottomColor="#ffb759"
                            link="https://github.com/LetMeBeJim/JimsRecipeSite"
                            logo="coffee"
                            description="Github page for my recipe site"
                        ></AboutMeBox>
                    </div>
                </div>
                <FillerRight className="col"></FillerRight>
            </motion.div>    
        </>
    );
};

export default AboutMe;