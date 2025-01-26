import React from 'react';
import {LucideMapPin} from "lucide-react";
import PropTypes from 'prop-types';
import DualButtons from "./DualButtons.jsx";

SearchBar.propTypes = {

};

function SearchBar(props) {
    return (
        <div className='flex-col justify-items-center'>
            {/*text label*/}
            <div className='flex justify-center text-sm py-2'>
                Start by entering your location
            </div>
            <div className="flex p-3 border-2 border-gray-200 rounded-3xl justify-between">
                <input type="text" placeholder="Enter Location"
                       className="justify-self-center outline-none"/>
                <LucideMapPin/>
            </div>
        </div>
    );
}

export default SearchBar;