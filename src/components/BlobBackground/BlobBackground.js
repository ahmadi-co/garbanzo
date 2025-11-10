import React from 'react';

export default function MinimalBlobBackground() {
    return (
        <div className="blob-container">
            <style jsx>{`
                .blob-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: -1;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -30px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                /* Animated dots using radial gradients */
                .blob-container {
                    background-image: /* Animated dots layer 1 */ radial-gradient(circle, #5c7fc7 1.5px, transparent 1.5px),
                    radial-gradient(circle, #4a6bbd 2px, transparent 2px),
                    radial-gradient(circle, #7094d4 1px, transparent 1px),
                    radial-gradient(circle, #5c7fc7 1.5px, transparent 1.5px),
                    radial-gradient(circle, #4a6bbd 1px, transparent 1px),
                        /* Animated dots layer 2 */ radial-gradient(circle, #7094d4 2px, transparent 2px),
                    radial-gradient(circle, #5c7fc7 1px, transparent 1px),
                    radial-gradient(circle, #4a6bbd 1.5px, transparent 1.5px);
                    background-size: /* Dots layer 1 positions */ 400px 400px,
                    500px 500px,
                    300px 300px,
                    450px 450px,
                    350px 350px,
                        /* Dots layer 2 positions */ 550px 550px,
                    380px 380px,
                    420px 420px,
                        /* Base gradient and grid */ 100% 100%,
                    100px 100px,
                    100px 100px;
                    background-position: /* Dots layer 1 */ 10% 30%,
                    60% 70%,
                    80% 20%,
                    40% 80%,
                    10% 60%,
                        /* Dots layer 2 */ 70% 40%,
                    30% 90%,
                    90% 50%,
                        /* Base */ 0 0,
                    0 0,
                    0 0;
                    animation: moveDots 30s ease-in-out infinite;
                }

                @keyframes moveDots {
                    0%, 100% {
                        background-position: 20% 30%,
                        60% 70%,
                        80% 20%,
                        40% 80%,
                        10% 60%,
                        70% 40%,
                        30% 90%,
                        90% 50%,
                        0 0,
                        0 0,
                        0 0;
                    }
                    50% {
                        background-position: 25% 35%,
                        65% 65%,
                        75% 25%,
                        45% 75%,
                        15% 55%,
                        75% 45%,
                        35% 85%,
                        85% 55%,
                        0 0,
                        0 0,
                        0 0;
                    }
                }
            `}</style>
        </div>
    );
}

