import React, { useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = memo(() => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Only scroll to top if there's no hash in the URL
        if (!hash) {
            // Check if scroll is needed
            if (window.scrollY !== 0) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
});

export default ScrollToTop;