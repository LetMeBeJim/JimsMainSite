import React, {useState} from 'react';
import peach from "../svg/peach.svg";
import pineapple from "../svg/pineapple.svg";
import './LoginBox.css';

const LoginBox = () => {
    const [count, setCount] = useState(0);
    const placeholder = "write something here :)"

    const [animate, setAnimate] = useState(false);

    const handleClick =() =>{
        setAnimate(true);
        console.log(animate);
        setTimeout(() => setAnimate(false), 450)
    }



    return (
        <>
            <div className="row">
                <img className={`${animate ? 'animate-[spin1_0.5s_linear_infinite]' : ''} absolute -rotate-[25deg] h-[400px] w-[400px] z-10 top-0 left-0`} alt="oops" src={peach}/>
                <div className="absolute bg-gradient-to-r from-[#a8d971] to-[#c6eb86] w-[800px] rounded-lg flex items-center justify-center text-center py-[1rem] top-20 left-[250px] z-40">
                    <form className='w-full h-full'>
                        <p className="py-3 text-4xl font-bold text-white">Email</p>
                        <input type="text" className="w-[60%] h-10 rounded-2xl bg-[#f5f2f0] px-2 font-semibold text-center focus:bg-[#ffffff] focus:outline-[#db9e3b]"></input>
                        <p className="py-3 text-4xl font-bold text-white">Message</p>
                        <textarea maxLength='250' defaultValue={placeholder} onChange={e => setCount(e.target.value.length)} className="resize-none w-[60%] h-40 rounded-2xl bg-[#f5f2f0] px-2 font-semibold text-center focus:bg-[#ffffff] focus:outline-[#db9e3b]">
                            
                        </textarea>
                        <p className="text-white">{count}/250</p>
                        <div className="py-2"></div>
                        <button className="py-4 bg-[#ffffff] w-[20%] rounded-full hover:bg-[#bac9b7] group" type="button" onClick={handleClick}>
                            <p className='text-4xl font-bold text-[#a8d971] group-hover:text-[#ffffff]'>Submit</p>
                        </button>
                    </form>
                </div>
                <img className={`${animate ? 'animate-[spin2_0.5s_linear_infinite]' : ''} absolute rotate-[25deg] h-[400px] w-[400px] z-10 top-2 left-[920px]`} alt="oops" src={pineapple}/>
            </div>
        </>
    );
};

export default LoginBox;