import React from 'react';
import PropTypes from 'prop-types';
import FilterSwitch from "./FilterSwitch.jsx";

FilterCard.propTypes = {
    onClose: PropTypes.func.isRequired,
};

function FilterCard({ onClose }) {
    return (
        <div className='bg-black/30 min-h-screen flex flex-col justify-end w-full border-2'>
            <div className='bg-white p-4 rounded-3xl w-full'>
                <div className='flex justify-center font-semibold pb-4'>
                    Filter Search
                </div>
                <div className='flex flex-col justify-center p-2'>
                    <FilterSwitch label="Woman-Owned" checked={true} id='categories=woman-owned'/>
                    <FilterSwitch label="Black-Owned" checked={false}/>
                    <FilterSwitch label="Local" checked={false}/>
                    <FilterSwitch label="Vegan Options" checked={false}/>
                    <FilterSwitch label="Gluten-free Options" checked={false}/>
                </div>
                <div>
                    <button className='bg-[#2c2c2c] text-white p-2 rounded-3xl w-full' onClick={onClose}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterCard;