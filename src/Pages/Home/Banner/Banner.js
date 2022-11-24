import React from 'react';
import funiture from '../../../assets/icons/banner.webp';
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={funiture} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">SELL YOUR <br /> FURNITURE <br /> FOR QUICK CASH</h1>
                    <p className="py-6">Recycle-Furniture is an online resale website for pre-owned furniture that made to last.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;