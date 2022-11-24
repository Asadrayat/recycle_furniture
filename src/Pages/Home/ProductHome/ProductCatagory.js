import React from 'react';

const ProductCatagory = ({ ctg }) => {
    const { name, icon, bgClass } = ctg;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <button className='btn btn-active'>Details</button>
            </div>
        </div>
    );
};

export default ProductCatagory;