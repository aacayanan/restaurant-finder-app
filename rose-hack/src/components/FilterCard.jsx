import React from 'react';
import PropTypes from 'prop-types';
import FilterSwitch from "./FilterSwitch.jsx";

FilterCard.propTypes = {
    filterStates: PropTypes.object.isRequired,
    setFilterStates: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

function FilterCard({ filterStates, setFilterStates, onClose }) {
    const handleSwitchChange = (label) => {
        setFilterStates(prevStates => ({
            ...prevStates,
            [label]: !prevStates[label]
        }));
    };

    const formatLabel = (label) => {
        return label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    };

    return (
        <div className='bg-black/30 min-h-screen flex flex-col justify-end w-full border-2'>
            <div className='bg-white p-4 rounded-3xl w-full'>
                <div className='flex justify-center font-semibold pb-4'>
                    Filter Search
                </div>
                <div className='flex flex-col justify-center p-2'>
                    {Object.keys(filterStates).map((key) => (
                        <FilterSwitch
                            key={key}
                            label={formatLabel(key)}
                            checked={filterStates[key]}
                            onChange={() => handleSwitchChange(key)}
                        />
                    ))}
                </div>
                <div>
                    <button className='bg-[#2c2c2c] text-white p-2 rounded-3xl w-full' onClick={() => onClose(filterStates)}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterCard;