import React from 'react';
import img from '../../../assets/images/why.jpg';
const Why = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">

                    <img src={img} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />

                    <div>
                        <div className='hero-content flex-col lg:flex-row'>
                            <p className='text-9xl font-bold'>1</p>
                            <div className=''>
                                <h1 className='text-2xl font-medium'>Save time.</h1>
                                <p>We make the process of buying and selling furniture easier than ever. From pickup to storage, inspection, cleaning, and delivery, we do all the heavy lifting for you so that good furniture doesn’t go to waste. </p>
                            </div>
                        </div>
                        <div className='hero-content flex-col lg:flex-row'>
                            <p className='text-9xl font-bold'>2</p>
                            <div className=''>
                                <h1 className='text-2xl font-medium'>Buying? Save money. </h1>
                                <p>Moving to a new space or redecorating? Extend the life of great design by buying pre-loved and save up to 90% on top furniture brands </p>
                            </div>
                        </div>
                        <div className='hero-content flex-col lg:flex-row'>
                            <p className='text-9xl font-bold'>3</p>
                            <div className=''>
                                <h1 className='text-2xl font-medium'>Selling? Get paid.</h1>
                                <p>Sit back and relax. We do all the work necessary to get the most value out of your furniture. When your item gets sold, you get paid.</p>
                            </div>
                        </div>
                        <div className='hero-content flex-col lg:flex-row'>
                            <p className='text-9xl font-bold'>4</p>
                            <div className=''>
                                <h1 className='text-2xl font-medium'>Be sustainable.</h1>
                                <p>Kaiyo connects a love of great design with a greater love for our environment by keeping furniture out of landfills and in our homes for as long as possible.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Why;