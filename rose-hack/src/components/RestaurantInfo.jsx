import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

RestaurantInfo.propTypes = {

};

function RestaurantInfo(props) {
    const [restaurant, setRestaurant] = useState({
        name: "Loading...",
        status: "Fetching data...",
        stars: 0,
        priceLevel: 0,
    });

    // Helper function to render stars
    const renderStars = (count) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= count ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
            );
        }
        return stars;
    };

    // useEffect(() => {
    //     // Simulate data fetch
    //     setTimeout(() => {
    //         setRestaurant({
    //             name: "Soup Du Jour",
    //             status: "Restaurant is Open until 8:00 PM",
    //             stars: 4,
    //             priceLevel: 3,
    //         });
    //     }, 2000); // Mock API delay
    // }, []);

    return (
        <div className="border p-4 rounded-lg shadow-md flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold">{restaurant.name}</h1>
                <p className="text-green-600">{restaurant.status}</p>
                <div className="flex space-x-1 text-xl mt-2">
                    {renderStars(restaurant.stars)}
                </div>
            </div>
            <div className="text-2xl font-bold">
                {"$".repeat(restaurant.priceLevel)}
                <span className="text-gray-300">
          {"$".repeat(5 - restaurant.priceLevel)}
        </span>
            </div>
        </div>
    );
}

export default RestaurantInfo;