import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Buffer from "../components/Buffer.jsx";
import Navbar from "../components/Navbar.jsx";
import ImageLoading from "../assets/placeholder-image.png";
import RestaurantInfo from "../components/RestaurantInfo.jsx";
import ChoiceButtons from "../components/ChoiceButtons.jsx";
import FinalCard from "../components/FinalCard.jsx";
import axios from "axios";

RestaurantPage.propTypes = {};

function RestaurantPage(props) {
    const [imageSrc, setImageSrc] = useState(ImageLoading);
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [restaurantName, setRestaurantName] = useState("Loading...");
    const [address, setAddress] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [showFinalCard, setShowFinalCard] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Fake loading delay
                const response = await axios.get("http://localhost:8080/api/skibidi");
                console.log(response);
                setRestaurantData(response.data); // Update state with restaurant data
                setImageSrc(response.data.image_url || ImageLoading); // Update image source
                setRating(Number(response.data.rating) || 0);
                setPrice(response.data.price.length || 0);
                setRestaurantName(response.data.name || "Loading");
                setAddress(response.data.location.display_address || "");
                setIsOpen(response.data.is_open || false); // Update isOpen state
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
        <div className="relative">
            <div className="max-w-screen-sm relative">
                <Buffer />
                <Navbar />
                <div className="flex justify-center p-8">
                    <div className="w-screen h-80">
                        <img
                            src={imageSrc}
                            alt="restaurant-img"
                            className="w-full h-full object-cover rounded-2xl border-2 border-black"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <div className="border p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">{restaurantName}</h1>
                            {/* Display pending, open, or closed status */}
                            {loading ? (
                                <p className="text-yellow-600">Pending...</p>
                            ) : (
                                <p className={isOpen ? "text-green-600" : "text-red-600"}>
                                    {isOpen ? "Open" : "Closed"}
                                </p>
                            )}
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
                <div className="p-8">
                    <ChoiceButtons address={address} onCheckClick={() => setShowFinalCard(true)} />
                </div>
                {showFinalCard && (
                    <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                        <FinalCard address={address} />
                    </div>
                )}
            </div>
        </div>
    );
}



export default RestaurantPage;