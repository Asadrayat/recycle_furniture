import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {name} = useLoaderData();
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default CheckOut;