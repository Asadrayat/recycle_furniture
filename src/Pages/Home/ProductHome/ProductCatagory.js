import React from 'react';
import { Link } from 'react-router-dom';

const ProductCatagory = ({ ctg }) => {
    const { name, icon, bgClass, _id } = ctg;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <Link to={`/catagoryOptions/${_id}`}><button className='btn btn-active'>Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCatagory;