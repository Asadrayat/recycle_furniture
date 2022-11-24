import React, { useEffect, useState } from 'react';
import ProductCatagory from './ProductCatagory';
const ProductCatagories = () => {
    const [catagories, setcataories] = useState([]);
    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => {
                setcataories(data)
            })
    }, [])

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                catagories.map(ctg => <ProductCatagory
                    key={ctg.id}
                    ctg={ctg}
                ></ProductCatagory>)
            }
        </div>
    );
};

export default ProductCatagories;