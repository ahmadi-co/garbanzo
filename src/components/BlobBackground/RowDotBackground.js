import React from 'react';

export default function RowDotBackground() {
    return (
        <div className="row-dot-container">
            <style jsx>{`
                .row-dot-container {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                /* Animated dots using radial gradients */
                .row-dot-container::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: /* Animated dots layer 1 */ radial-gradient(circle, #5c7fc7 1.5px, transparent 1.5px),
                    radial-gradient(circle, #4a6bbd 2px, transparent 2px),
                    radial-gradient(circle, #7094d4 1px, transparent 1px),
                    radial-gradient(circle, #5c7fc7 1.5px, transparent 1.5px),
                    radial-gradient(circle, #4a6bbd 1px, transparent 1px),
                        /* Animated dots layer 2 */ radial-gradient(circle, #7094d4 2px, transparent 2px),
                    radial-gradient(circle, #5c7fc7 1px, transparent 1px),
                    radial-gradient(circle, #4a6bbd 1.5px, transparent 1.5px),
                    radial-gradient(circle, #5c7fc7 2.5px, transparent 2.5px),
                    radial-gradient(circle, #7094d4 1.5px, transparent 1.5px),
                        /* More scattered dots */ radial-gradient(circle, #4a6bbd 1px, transparent 1px),
                    radial-gradient(circle, #5c7fc7 1px, transparent 1px),
                    radial-gradient(circle, #7094d4 2px, transparent 2px),
                    radial-gradient(circle, #4a6bbd 1.5px, transparent 1.5px),
                    radial-gradient(circle, #5c7fc7 1px, transparent 1px);
                    background-size: /* Dots layer 1 */ 400px 400px,
                    500px 500px,
                    300px 300px,
                    450px 450px,
                    350px 350px,
                        /* Dots layer 2 */ 550px 550px,
                    380px 380px,
                    420px 420px,
                    480px 480px,
                    320px 320px,
                        /* More dots */ 390px 390px,
                    460px 460px,
                    520px 520px,
                    340px 340px,
                    410px 410px;
                    background-position: /* Dots layer 1 */ 15% 25%,
                    55% 65%,
                    75% 15%,
                    35% 75%,
                    8% 55%,
                        /* Dots layer 2 */ 68% 38%,
                    28% 88%,
                    88% 48%,
                    45% 20%,
                    85% 80%,
                        /* More dots */ 22% 68%,
                    62% 42%,
                    92% 28%,
                    12% 92%,
                    72% 12%;
                    opacity: 0.6;
                    animation: moveDots 25s ease-in-out infinite;
                }

                /* Additional dots layer with different animation */
                .row-dot-container::after {
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