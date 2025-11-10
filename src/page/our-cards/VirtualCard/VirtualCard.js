import React, { useState, useEffect } from 'react';
import './VirtualCard.css';

export default function VirtualCard() {
    const [glowAnimation, setGlowAnimation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlowAnimation((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="virtual-card__wrapper">
            
        </div>
    );
}
