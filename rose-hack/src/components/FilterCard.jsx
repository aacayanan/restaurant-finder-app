import React from 'react';
import PropTypes from 'prop-types';
import FilterSwitch from "./FilterSwitch.jsx";

FilterCard.propTypes = {};

function FilterCard(props) {
    return (
        <div className='bg-black/40 min-h-screen flex flex-col justify-end max-w-screen-sm'>
            <div className='bg-white p-4 rounded-3xl'>
                <div className='flex justify-center font-semibold pb-4'>
                    Filter Search
                </div>
                <div className='flex flex-col justify-center p-2'>
                    <FilterSwitch label="Woman-Owned" checked={true}/>
                    <FilterSwitch label="Black-Owned" checked={false}/>
                    <FilterSwitch label="Organic Options" checked={false}/>
                    <FilterSwitch label="Vegan Options" checked={false}/>
                    <FilterSwitch label="Gluten-free Options" checked={false}/>
                </div>
            </div>
        </div>
    );
}

export default FilterCard;