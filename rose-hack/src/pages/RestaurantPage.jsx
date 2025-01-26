import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Buffer from "../components/Buffer.jsx";
import Navbar from "../components/Navbar.jsx";
import ImageLoading from "../assets/placeholder-image.png";
import RestaurantInfo from "../components/RestaurantInfo.jsx";
import ChoiceButtons from "../components/ChoiceButtons.jsx";

RestaurantPage.propTypes = {

};

function RestaurantPage(props) {
    const [imageSrc, setImageSrc] = useState(ImageLoading);

    return (
        <div className=''>
            <div className='max-w-screen-sm'>
                <Buffer/>
                <Navbar/>
                {/* image component */}
                <div className='flex justify-center p-8'>
                    <div className="w-screen h-80">
                        <img src={imageSrc} alt='restaurant-img' className='w-full h-full object-cover rounded-2xl border-2 border-black'/>
                    </div>
                </div>
                <div className='p-4'>
                    <RestaurantInfo/>
                </div>
                <div className='p-8'>
                    <ChoiceButtons/>
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;