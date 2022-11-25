import React from 'react';
import { Link } from 'react-router-dom';

const Furniture = ({ furniture }) => {
    const { catagory, location, picture, used, title, seller, resale_price, posted, original_price, about } = furniture;
    console.log(furniture);
    return (
        <div className="card w-9/12 bg-base-100 shadow-xl">
            <figure><img className='h-72 w-full' src={picture} alt="Truck" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Preowned</div>
                </h2>
                <p> {about.length > 100 ?
                    `${about.substring(0, 100)}...` :about
                }</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Original Price : {original_price}</div>
                    <div className="badge badge-outline">Resale_price : ${resale_price}</div>
                </div>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Used : {used}</div>
                    <div className="badge badge-outline">Posted : ${posted}</div>
                </div>
                <div className="card-actions  ">
                    <Link ><button className='btn  btn-warning w-full'>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Furniture;