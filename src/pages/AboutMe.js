import React, { useState } from "react";
import EntryTransition from "../components/EntryTransition";
import FillerLeft from "../components/FillerLeft";
import FillerRight from "../components/FillerRight";
import {motion} from 'framer-motion';
import './AboutMe.css';


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
                <div className="col bg-[#f7fcf2]">
                    <div className="group row h-[93vh] px-1 py-1 grid grid-rows-4 grid-cols-6 gap-1 font-mono font-medium">
                        <div className="bg-gradient-to-br from-[#ffa938] to-[#f6fcd4] row-start-1 row-span-1 col-span-6 rounded-3xl">
                            <h1 className="text-center font-bold text-7xl text-white">Interesting Things I've Made!</h1>
                            <div className="h-[1rem]"></div>
                            <p className="hidden group-hover:block text-center text-black">something something something else here</p>
                        </div>

                        <div className="bg-gradient-to-br from-[#BBD915] to-[#f6fcd4] row-start-2 row-span-2 col-span-4 rounded-3xl">
                            <h1 className="text-center pt-20 font-bold text-7xl text-white">React Recipe Site</h1>
                            <div className="h-[1rem]"></div>
                            <p className="hidden group-hover:block text-center text-black">something something something else here</p>
                        </div>

                        <div className="bg-gradient-to-br from-[#ff985c] to-[#e8ffc4] row-start-2 row-span-2 col-span-2 rounded-3xl">
                            <h1 className="text-center pt-20 font-bold text-7xl text-white">Lil Jasper</h1>
                            <div className="h-[1rem]"></div>
                            <p className="hidden group-hover:block text-center text-black">something something something else here</p>
                        </div>


                        <div className="bg-gradient-to-br from-[#ff985c] to-[#e8ffc4] row-start-4 row-span-1 col-span-5 rounded-3xl">
                            <h1 className="text-center pt-20 font-bold text-7xl text-white">Angular Delivery Service</h1>
                            <div className="h-[1rem]"></div>
                            <p className="hidden group-hover:block text-center text-black">something something something else here</p>
                        </div>

                        <div className="bg-gradient-to-br from-[#ffa938] to-[#e8ffc4] row-start-4 row-span-1 col-span-1 rounded-3xl">
                            <h1 className="text-center pt-20 font-bold text-7xl text-white">Solana dApp</h1>
                            <div className="h-[1rem]"></div>
                            <p className="hidden group-hover:block text-center text-black">something something something else here</p>
                        </div>
                    </div>
                </div>
                    
                <FillerRight className="col"></FillerRight>
            </motion.div>    
        </>
    );
};

export default AboutMe;