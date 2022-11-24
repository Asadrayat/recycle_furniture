import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import ProductCatagories from '../ProductHome/ProductCatagories';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCatagories></ProductCatagories>
            <AdvertisedItem></AdvertisedItem>
            <Why></Why>
        </div>
    );
};

export default Home;