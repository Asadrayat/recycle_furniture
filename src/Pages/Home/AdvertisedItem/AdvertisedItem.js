import React from 'react';
import tree from '../../../assets/icons/tree.webp';
const AdvertisedItem = () => {
    return (
        <div className="hero py-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Furnish forward and <br />sustain forests</h1>
                    <p className="py-6">We’ll plant a tree through our community foundation for every order completed on Recycle-Furniture.</p>
                </div>
                <img src={tree} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default AdvertisedItem;