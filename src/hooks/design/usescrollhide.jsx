import { useEffect, useState } from 'react';

const useScrollHide = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // create  our event listeners
  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
        };
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    //clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return data;
};

export default useScrollHide;
