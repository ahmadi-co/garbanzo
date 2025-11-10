import React from 'react';
import './HorizontalWaveBlobs.css';

export default function HorizontalWaveBlobs() {
    return (
        <div className="slwb-container">
            {/* SVG Animated Background */}
            <svg className="slwb-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Line Gradients */}
                    <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4a6bbd" stopOpacity="0" />
                        <stop offset="50%" stopColor="#4a6bbd" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#4a6bbd" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5c7fc7" stopOpacity="0" />
                        <stop offset="50%" stopColor="#5c7fc7" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#5c7fc7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7094d4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#7094d4" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#7094d4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3d5ba3" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3d5ba3" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3d5ba3" stopOpacity="0" />
                    </linearGradient>

                    {/* Blob Gradients */}
                    <radialGradient id="blobGrad1">
                        <stop offset="0%" stopColor="#2d4a8f" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2d4a8f" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="blobGrad2">
                        <stop offset="0%" stopColor="#4a6bbd" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4a6bbd" stopOpacity="0" />
                    </radialGradient>

                    {/* Filters */}
                    <filter id="lineGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="blobBlur">
                        <feGaussianBlur stdDeviation="50" />
                    </filter>
                </defs>

                {/* Animated Lines */}
                <g filter="url(#lineGlow)">
                    <path
                        d="M-100,200 Q100,180 300,200 T700,200 Q900,220 1100,200 T1500,200"
                        fill="none"
                        stroke="url(#lineGrad1)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="8s"
                            repeatCount="indefinite"
                            values="M-100,200 Q100,180 300,200 T700,200 Q900,220 1100,200 T1500,200;
                      M-100,220 Q100,200 300,180 T700,220 Q900,200 1100,220 T1500,200;
                      M-100,200 Q100,180 300,200 T700,200 Q900,220 1100,200 T1500,200"
                        />
                    </path>

                    <path
                        d="M-100,300 Q200,320 400,300 T800,300 Q1000,280 1200,300 T1600,300"
                        fill="none"
                        stroke="url(#lineGrad2)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            values="M-100,300 Q200,320 400,300 T800,300 Q1000,280 1200,300 T1600,300;
                      M-100,280 Q200,300 400,320 T800,280 Q1000,300 1200,280 T1600,300;
                      M-100,300 Q200,320 400,300 T800,300 Q1000,280 1200,300 T1600,300"
                        />
                    </path>

                    <path
                        d="M-100,450 Q150,430 350,450 T750,450 Q950,470 1150,450 T1550,450"
                        fill="none"
                        stroke="url(#lineGrad3)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="12s"
                            repeatCount="indefinite"
                            values="M-100,450 Q150,430 350,450 T750,450 Q950,470 1150,450 T1550,450;
                      M-100,470 Q150,450 350,430 T750,470 Q950,450 1150,470 T1550,450;
                      M-100,450 Q150,430 350,450 T750,450 Q950,470 1150,450 T1550,450"
                        />
                    </path>

                    <path
                        d="M-100,150 Q250,170 450,150 T850,150 Q1050,130 1250,150 T1650,150"
                        fill="none"
                        stroke="url(#lineGrad4)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="d"
                            dur="15s"
                            repeatCount="indefinite"
                            values="M-100,150 Q250,170 450,150 T850,150 Q1050,130 1250,150 T1650,150;
                      M-100,130 Q250,150 450,170 T850,130 Q1050,150 1250,130 T1650,150;
                      M-100,150 Q250,170 450,150 T850,150 Q1050,130 1250,150 T1650,150"
                        />
                    </path>
                </g>
            </svg>

            {/* Decorative Grid Overlay */}
            <div className="slwb-grid"></div>
        </div>
    );
}
