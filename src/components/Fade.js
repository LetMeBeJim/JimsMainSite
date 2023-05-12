import React, { useEffect, useRef, useState } from 'react';
import './Fade.css';

const Fade = ({children}) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
  
    useEffect(() => {const observer = new IntersectionObserver(entries => {
        // In your case there's only one element to observe:     
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setVisible(true);
        } else {
            setVisible(false);
        }
      });
      observer.observe(domRef.current);  
      return () => observer.disconnect();
    }, []);
  
    return (<section ref={ domRef } className={ `h-[400px] ${isVisible ? ' is-visible' : ''}` }>{ children }</section>);
};

export default Fade;