import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Buffer from "../components/Buffer.jsx";
import Navbar from "../components/Navbar.jsx";
import ImageLoading from "../assets/placeholder-image.png";
import RestaurantInfo from "../components/RestaurantInfo.jsx";

RestaurantPage.propTypes = {

};

function RestaurantPage(props) {
    const [imageSrc, setImageSrc] = useState(ImageLoading);

    return (
        <div className=''>
            <div className='max-w-screen-sm'>
                <Buffer/>
                <Navbar/>
                {/*image component*/}
                <div className='flex justify-center p-8'>
                    <div>
                        <img src={imageSrc} alt='restaurant-img' className='rounded-2xl min-w-sm max-w-sm border-2 border-black max-h-full'/>
                    </div>
                </div>
                <div className='p-4'>
                    <RestaurantInfo/>
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;