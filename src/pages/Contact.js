import EntryTransition from "../components/EntryTransition";
import FillerLeft from "../components/FillerLeft";
import FillerRight from "../components/FillerRight";
import {motion} from 'framer-motion';
import LoginBox from "../components/LoginBox";

const Resume = () => {
    return (
        <>
            <EntryTransition></EntryTransition>
            
            <motion.div className="row"
            initial={{ opacity: 0}}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}>
                <FillerLeft className="col"></FillerLeft>

                <div className="col h-[93vh] bg-[#f7fcf2] overflow-hidden relative">
                    <div className="row h-[10%]"></div>
                    <div className="pb-12 pl-[100px]">
                        <h1 className="font-mono font-extrabold text-9xl">Contact</h1>
                        <h1 className="font-mono font-extrabold text-9xl">Me.</h1>
                    </div>
                    <div className="row pl-[100px]">
                        <p className="font-mono text-left w-4/12">Really, send me an email here and I'm happy to receive anything!</p>
                    </div>
                    <div className="w-[67vw] h-[50%] relative flex items-center justify-center left-[10%]">
                        <LoginBox className=""/>
                    </div>
                </div>
                <FillerRight className="col"></FillerRight>
            </motion.div>
        </>
    );
}

export default Resume;