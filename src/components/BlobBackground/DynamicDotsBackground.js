import React from "react";

export default function DynamicDotsBackground() {
    return (
        <div className="dynamic-dot-container">
            <style jsx>{`
                .dynamic-dot-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    z-index: -1;
                }

                /* Dense dot pattern covering entire area */
                .dynamic-dot-container::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, #5c7fc7 1px, transparent 1px),
                    radial-gradient(circle, #4a6bbd 1.5px, transparent 1.5px),
                    radial-gradient(circle, #7094d4 1px, transparent 1px);
                    background-size: 50px 50px,
                    70px 70px,
                    60px 60px;
                    background-position: 0 0,
                    25px 25px,
                    10px 40px;
                    opacity: 0.4;
                    animation: moveDots 20s ease-in-out infinite;
                }

                /* Additional dots layer with different animation */
                .dynamic-dot-container::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, #5c7fc7 1px, transparent 1px),
                    radial-gradient(circle, #7094d4 1.5px, transparent 1.5px),
                    radial-gradient(circle, #4a6bbd 1px, transparent 1px),
                    radial-gradient(circle, #5c7fc7 2px, transparent 2px),
                    radial-gradient(circle, #7094d4 1px, transparent 1px),
                    radial-gradient(circle, #4a6bbd 1.5px, transparent 1.5px),
                    radial-gradient(circle, #5c7fc7 1px, transparent 1px),
                    radial-gradient(circle, #7094d4 2px, transparent 2px);
                    background-size: 370px 370px,
                    490px 490px,
                    330px 330px,
                    440px 440px,
                    360px 360px,
                    510px 510px,
                    400px 400px,
                    470px 470px;
                    background-position: 50% 30%,
                    25% 70%,
                    80% 50%,
                    10% 40%,
                    65% 85%,
                    40% 10%,
                    90% 65%,
                    20% 15%;
                    opacity: 0.5;
                    animation: moveDots 35s ease-in-out infinite reverse;
                }

                @keyframes moveDots {
                    0%, 100% {
                        transform: translate(0, 0);
                        opacity: 0.6;
                    }
                    25% {
                        transform: translate(15px, -15px);
                        opacity: 0.4;
                    }
                    50% {
                        transform: translate(-10px, 10px);
                        opacity: 0.7;
                    }
                    75% {
                        transform: translate(20px, 5px);
                        opacity: 0.5;
                    }
                }
            `}</style>
        </div>
    );
}