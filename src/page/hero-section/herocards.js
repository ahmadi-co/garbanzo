import React, {useEffect, useState} from 'react';
import './HeroGoldCard.css';
import DynamicDotsBackground from "../../components/BlobBackground/DynamicDotsBackground";

const HeroGoldCard = () => {

    return (
        <div className='hs-cards-grid'>
            <div className="info-card">
                <h1 className="hs-card-title">GOLD CARD</h1>
                <div className="hs-card gold-card">
                    <div className="hs-chip">
                        <div className="chip-pattern"></div>
                    </div>
                </div>
                <DynamicDotsBackground/>
            </div>

            <div className="info-card">
                <h1 className="hs-card-title">PHYSICAL CARD</h1>
                <div className="hs-card physical-card">
                    <div className="hs-chip">
                        <div className="chip-pattern"></div>
                    </div>
                </div>
                <DynamicDotsBackground/>
            </div>

            <div className="info-card">
                <h1 className="hs-card-title">VERTICAL CARD</h1>
                <div className="hs-card virtual-card">
                    <div className="hs-chip">
                        <div className="chip-pattern"></div>
                    </div>
                </div>
                <DynamicDotsBackground/>
            </div>

        </div>
    );
};

export default HeroGoldCard;
