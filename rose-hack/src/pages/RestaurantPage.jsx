import React from 'react';
import PropTypes from 'prop-types';
import Buffer from "../components/Buffer.jsx";
import Navbar from "../components/Navbar.jsx";

RestaurantPage.propTypes = {

};

function RestaurantPage(props) {
    return (
        <div className=''>
            <div className='max-w-screen-sm'>
                <Buffer/>
                <Navbar/>
            </div>
        </div>
    );
}

export default RestaurantPage;