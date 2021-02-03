import { useState, useEffect } from 'react';

const useScroll = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState({});
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState();
    const [windowSize, setWindowSize] = useState({})

    const listener = (e) => {
        setWindowSize({height: window.innerHeight, width: window.innerWidth});
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        setWindowSize({ height: window.innerHeight, width: window.innerWidth });
        setBodyOffset(document.body.getBoundingClientRect());
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return {
        scrollY,
        scrollX,
        scrollDirection,
        windowSize,
    };
};

export default useScroll;
