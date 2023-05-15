import React from "react";
import logo from "../svg/logo.svg";
import "./HomePage.css";
import EntryTransition from "../components/EntryTransition";
import FillerLeft from "../components/FillerLeft";
import FillerRight from "../components/FillerRight";
import {motion} from 'framer-motion';

const HomePage = () => {
    // check viewport here and change transition prop accordingly

    return (
        <>
        <EntryTransition value="Hi!"></EntryTransition>
        <motion.div className="row"
            initial={{ opacity: 0}}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
        >
            <FillerLeft></FillerLeft>
            <div className="h-[93vh] w-screen homepage col sm:w-4/6 md-w:4/6 xl:w-3/6 lg:w-4/6 bg-[#f7fcf2] flex justify-center items-center">
                <div className="row py-[-50px] pl-[100px]">
                    <div className="col">
                        <h1 className="lg:text-4xl xl:text-6xl font-extrabold md:text-2xl sm:text-2xl ">Hi. I'm Jim Yao.</h1>
                        <h3 className="text-lg font-semibold">A newly graduated Software Developer</h3>
                        <div class="pt-5 h-12"></div>
                        <div className="font-mono font-medium flex-col space-y-6">
                            <p className="break-after-column">I have a focus on Full-Stack development with an interest on making various cool websites for my own use. I try to keep the aethestics consistent through out this website, I hope you like it!</p>
                            <p>Welcome! This website is my WIP main website, it will have access to my other various projects, and it will also hold some other interesting things that I've found. Please look around!</p>
                            <div className="pt-5 h-24"></div>
                            <p>To Jim: You need to start working on that quality-of-life improvement web development thing {String.fromCodePoint('0x1f643')}</p>
                        </div>
                        <div class="pt-5 h-12"></div>
                        <div className="row">
                            <div className="col flex flex-col items-center justify-right ">
                                <button className="h-[3rem] w-[9rem] group hover:bg-[#ffffff] bg-[#6e5494] text-white font-semibold text-xl text-center py-2 px-4 border border-blue-500 rounded-full">
                                    <a className="group-hover:text-blue-500" href="https://github.com/LetMeBeJim/LetMeBeJim/blob/main/README.md" target="_blank" rel="noreferrer">GitHub</a>
                                </button>
                            </div>
                            <div className="col flex flex-col items-center justify-right">
                                <button className="h-[3rem] w-[9rem]  group hover:bg-[#ffffff] bg-blue-500 text-white font-semibold text-xl text-center py-2 px-4 border border-blue-500 rounded-full">
                                    <a className="group-hover:text-blue-500" href="https://www.linkedin.com/in/bojingyao/" target="_blank" rel="noreferrer">LinkedIn</a>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="group col lg:block md:hidden sm:hidden relative" >
                        <a href="https://github.com/LetMeBeJim" target="_blank" rel="noreferrer" className="button absolute group-hover:block hover:invert hidden bg-[#6e5494] rounded-3xl text-2xl font-bold px-6 py-1 text-white 2xl:right-36 xl:right-6 lg:right-4 md:right-4 animate-bounce z-10 transition duration-150 ease-in-out">GitHub</a>
                        <img src={logo} className="image flex items-center justify-center mx-auto max-h-96 bg-[#ffd373] rounded-3xl" alt="My Logo"></img>
                    </div>
                </div>
            </div>
            <FillerRight></FillerRight>
        </motion.div>
        
        
        </>
    );
};

export default HomePage;