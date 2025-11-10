import React, { useRef, useEffect } from "react";
import './VerticalWaveBlobs.css';

export default function VerticalWaveBlobs() {
    const svgRef = useRef();

    useEffect(() => {
        const svg = svgRef.current;

        if (!svg) return;

        // Pause animations when offscreen
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                svg.unpauseAnimations();
            } else {
                svg.pauseAnimations();
            }
        });

        observer.observe(svg);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="vwb-container">
            <svg ref={svgRef} className="vwb-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Line Gradients */}
                    <linearGradient id="vLineGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#4a6bbd" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#4a6bbd" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#4a6bbd" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="vLineGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#5c7fc7" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#5c7fc7" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#5c7fc7" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="vLineGrad3" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#7094d4" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#7094d4" stopOpacity="0.7"/>
                        <stop offset="100%" stopColor="#7094d4" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="vLineGrad4" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#3d5ba3" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#3d5ba3" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#3d5ba3" stopOpacity="0"/>
                    </linearGradient>

                    {/* Accent Gradient */}
                    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4a6bbd" stopOpacity="0.6">
                            <animate attributeName="stop-color" values="#4a6bbd;#7094d4;#4a6bbd" dur="6s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="100%" stopColor="#7094d4" stopOpacity="0.6">
                            <animate attributeName="stop-color" values="#7094d4;#4a6bbd;#7094d4" dur="6s" repeatCount="indefinite"/>
                        </stop>
                    </linearGradient>

                    {/* Blob Gradients */}
                    <radialGradient id="vBlobGrad1">
                        <stop offset="0%" stopColor="#2d4a8f" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#2d4a8f" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="vBlobGrad2">
                        <stop offset="0%" stopColor="#4a6bbd" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#4a6bbd" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="vBlobGrad3">
                        <stop offset="0%" stopColor="#5c7fc7" stopOpacity="0.35"/>
                        <stop offset="100%" stopColor="#5c7fc7" stopOpacity="0"/>
                    </radialGradient>

                    {/* Filters - Reduced Gaussian blur to improve performance */}
                    <filter id="vLineGlow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    <filter id="vBlobBlur">
                        <feGaussianBlur stdDeviation="3"/>
                    </filter>

                    <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Animated Lines */}
                <g filter="url(#vLineGlow)">
                    <path
                        d="M200,1500 Q180,1300 200,1100 T200,700 Q220,500 200,300 T200,-100"
                        fill="none"
                        stroke="url(#vLineGrad1)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="8s"
                            repeatCount="indefinite"
                            values="
M200,1500 Q180,1300 200,1100 T200,700 Q220,500 200,300 T200,-100;
M220,1500 Q200,1300 180,1100 T220,700 Q200,500 220,300 T200,-100;
M200,1500 Q180,1300 200,1100 T200,700 Q220,500 200,300 T200,-100
"
                        />
                    </path>

                    <path
                        d="M400,1600 Q420,1400 400,1200 T400,800 Q380,600 400,400 T400,-100"
                        fill="none"
                        stroke="url(#vLineGrad2)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            values="
M400,1600 Q420,1400 400,1200 T400,800 Q380,600 400,400 T400,-100;
M380,1600 Q400,1400 420,1200 T380,800 Q400,600 380,400 T400,-100;
M400,1600 Q420,1400 400,1200 T400,800 Q380,600 400,400 T400,-100
"
                        />
                    </path>

                    <path
                        d="M700,1550 Q680,1350 700,1150 T700,750 Q720,550 700,350 T700,-100"
                        fill="none"
                        stroke="url(#vLineGrad3)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="12s"
                            repeatCount="indefinite"
                            values="
M700,1550 Q680,1350 700,1150 T700,750 Q720,550 700,350 T700,-100;
M720,1550 Q700,1350 680,1150 T720,750 Q700,550 720,350 T700,-100;
M700,1550 Q680,1350 700,1150 T700,750 Q720,550 700,350 T700,-100
"
                        />
                    </path>

                    <path
                        d="M1000,1650 Q1020,1450 1000,1250 T1000,850 Q980,650 1000,450 T1000,-100"
                        fill="none"
                        stroke="url(#vLineGrad4)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="15s"
                            repeatCount="indefinite"
                            values="
M1000,1650 Q1020,1450 1000,1250 T1000,850 Q980,650 1000,450 T1000,-100;
M980,1650 Q1000,1450 1020,1250 T980,850 Q1000,650 980,450 T1000,-100;
M1000,1650 Q1020,1450 1000,1250 T1000,850 Q980,650 1000,450 T1000,-100
"
                        />
                    </path>
                </g>
            </svg>
        </div>
    );
}
