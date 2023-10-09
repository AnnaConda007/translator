import { useState, useEffect } from 'react';
import { breakpoints } from '../contains';

 
export const useScreenSize = () => { 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoints.tablet);
   const handleResize = () => {
    setIsMobile(window.innerWidth <= breakpoints.tablet);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return isMobile;
};
