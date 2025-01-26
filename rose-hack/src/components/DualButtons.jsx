import React from 'react';
import PropTypes from 'prop-types';

DualButtons.propTypes = {};

function DualButtons(props) {
    return (
        <div className='flex gap-6'>
            <button className="cursor-point text-gray-500 hover:underline">
                filter
            </button>
            <button className="cursor-pointer transition-all bg-[#2c2c2c] text-white px-6 py-2 rounded-lg border-[black]
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Get Started
            </button>
        </div>
    );
}

export default DualButtons;