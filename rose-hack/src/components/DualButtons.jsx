import React, { useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import {useNavigate, useNavigation} from "react-router";

DualButtons.propTypes = {
    onFilterButtonClick: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired,
    setHasError: PropTypes.func.isRequired,
};

function DualButtons({ onFilterButtonClick, location, setLocation, setHasError, states }) {
    const filterButtonPressed = async () => {
        try {
            const filterStatus = await axios.post("http://127.0.0.1:8080/linkButtonPress");
            console.log(filterStatus.data.success);
            onFilterButtonClick();
        } catch (error) {
            console.error("Filter button was never pressed", error);
        }
    };

    const getTrueAttributes = (states) => {
        return Object.keys(states).filter(key => states[key]);
    };

    const navigate = useNavigate();
    const handleButtonClick = async () => {
        if (location.trim() === '') {
            setHasError(true);
        } else {
            setHasError(false);
            console.log(location); // Log the location state
            try {
                const response = await axios.post("http://127.0.0.1:8080/getText", {
                    location: location, // Sending 'location' as the string parameter
                    attributes: states,
                });
            } catch (error) {
                console.error("Error occurred while sending the request:", error);
            } finally {
                navigate('/restaurant')
            }
        }
    };

    return (
        <div className='flex gap-6'>
            <button
                className="cursor-pointer text-gray-500 hover:underline"
                onClick={onFilterButtonClick}>
                Filter
            </button>
            <button className="cursor-pointer transition-all bg-[#2c2c2c] text-white px-6 py-2 rounded-lg border-[black]
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={handleButtonClick}>
                Get Started
            </button>
        </div>
    );
}

export default DualButtons;