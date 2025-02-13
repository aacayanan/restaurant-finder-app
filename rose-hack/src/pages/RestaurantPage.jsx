import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Buffer from "../components/Buffer.jsx";
import Navbar from "../components/Navbar.jsx";
import ImageLoading from "../assets/placeholder-image.png";
import RestaurantInfo from "../components/RestaurantInfo.jsx";
import ChoiceButtons from "../components/ChoiceButtons.jsx";
import FinalCard from "../components/FinalCard.jsx";
import axios from "axios";
import EndSearchCard from "../components/EndSearchCard.jsx";

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
    const [showEndSearchCard, setShowEndSearchCard] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Fake loading delay
                const response = await axios.get("http://localhost:8080/skibidi");
                setRestaurantData(response.data); // Update state with restaurant data
                setRestaurantName(response.data.name || "Loading");
                setImageSrc(response.data.image_url || ImageLoading); // Update image source
                setRating(Number(response.data.rating) || 0);
                setPrice(response.data.price.length || 0);
                setAddress(response.data.location.display_address || "");
                setIsOpen(response.data.business_hours[0].is_open_now || false); // Update isOpen state
            } catch (error) {
                if (error.response.status === 500) {
                    console.error('Internal server error (500)');
                    setShowEndSearchCard(true);
                } else {
                    console.log("Some other error then 500: " + error);
                }
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
        <div className='bg-gray-100'>
            <div className='relative flex items-center justify-center max-w-min bg-white h-screen mx-auto'>
                <div className="max-w-screen-sm relative">
                    <Buffer/>
                    <Navbar/>
                    <div className="flex justify-center p-8">
                        <div className="w-96 h-80">
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
                        <ChoiceButtons address={address} onCheckClick={() => setShowFinalCard(true)}/>
                    </div>
                    {showFinalCard && (
                        <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                            <FinalCard address={address} onExit={() => setShowFinalCard(false)}/>
                        </div>
                    )}
                    {showEndSearchCard && (
                        <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                            <EndSearchCard/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default RestaurantPage;