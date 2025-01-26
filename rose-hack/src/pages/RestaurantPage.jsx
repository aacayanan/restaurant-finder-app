import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Buffer from "../components/Buffer.jsx";
import Navbar from "../components/Navbar.jsx";
import ImageLoading from "../assets/placeholder-image.png";
import RestaurantInfo from "../components/RestaurantInfo.jsx";
import ChoiceButtons from "../components/ChoiceButtons.jsx";
import axios from "axios";

RestaurantPage.propTypes = {

};

function RestaurantPage(props) {
    const [imageSrc, setImageSrc] = useState(ImageLoading);
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [restaurantName, setRestaurantName] = useState("Loading...");

    useEffect(() => {
        // Make the GET request to fetch yelp_data
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Fake loading delay
                const response = await axios.get("http://localhost:8080/api/skibidi");
                console.log(response);
                setRestaurantData(response.data); // Update state with restaurant data
                setImageSrc(response.data.image_url || ImageLoading); // Update image source
                setRating(Number(response.data.rating) || 0)
                setPrice(response.data.price.length || 0)
                setRestaurantName(response.data.name || "Loading")
            } catch (error) {
                console.error("Error fetching yelp_data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                    {/*restaurant info*/}
                    {/*<RestaurantInfo/>*/}
                    <div className="border p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">{restaurantName}</h1>
                            <p className="text-green-600">{"OPEN MEOW MEOW MEOW"}</p>
                            <div className="flex space-x-1 text-xl mt-2">
                                {renderStars(rating)}
                            </div>
                        </div>
                        <div className="text-2xl font-bold">
                            {"$".repeat(price)}
                            <span className="text-gray-300">
                                {"$".repeat(5 - price)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='p-8'>
                    <ChoiceButtons/>
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;