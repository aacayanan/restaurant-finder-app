import React from 'react';
import { LucideMapPin } from "lucide-react";
import PropTypes from 'prop-types';

SearchBar.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
};

function SearchBar({ location, setLocation, hasError }) {
    return (
        <div className='flex-col justify-items-center'>
            {/*text label*/}
            <div className='flex justify-center text-sm py-2'>
                Start by entering your location
            </div>
            <div className={`flex p-3 border-2 rounded-3xl justify-between ${hasError ? 'border-red-500' : 'border-gray-200'}`}>
                <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="justify-self-center outline-none"
                />
                <LucideMapPin />
            </div>
        </div>
    );
}

export default SearchBar;