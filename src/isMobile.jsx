import { useState, useEffect } from "react";

export function isMobile(mobileMaxSize = 1001) {
    const [isMobile, setMobile] = useState(undefined);

    useEffect(() => {
        
        //media query that matches screens smaller than mobileMaxSize
        const windowSizeQuery = window.matchMedia(`(max-width: ${mobileMaxSize - 1}px)`);

        //listener for changes in screen size
        const onChange = () => {
            setMobile(window.innerWidth < mobileMaxSize);
        };

        //utilize listener to update as-needed
        windowSizeQuery.addEventListener("change", onChange);

        setMobile(window.innerWidth < mobileMaxSize);

        //remove listener when unloaded
        return () => {
            windowSizeQuery.removeEventListener("change", onChange);
        };
    }, [mobileMaxSize]);

    //return boolean using !! to catch undefined values as false
    return !!isMobile;
}