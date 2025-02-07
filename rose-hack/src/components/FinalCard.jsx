import React from 'react';
import PropTypes from 'prop-types';

FinalCard.propTypes = {
    address: PropTypes.string,
};

function FinalCard({ address }) {
    const handleGetDirections = () => {
        if (address) {
            const encodedAddress = encodeURIComponent(address);
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
        } else {
            alert('Error: Address not provided');
        }
    };

    return (
        <div className='bg-black/30 min-h-screen flex flex-col justify-end w-full border-2'>
            <div className='bg-white p-4 rounded-3xl w-full'>
                <div className='flex justify-center font-semibold pb-4'>
                    Details
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="p-2.5">
                            <div className="text-black text-base font-medium">Address</div>
                        </div>
                        <div className="p-2.5">
                            <div className="text-[#757575] text-base font-medium">
                                {address || "Error: Address not provided"}
                            </div>
                        </div>
                    </div>
                    <button
                        className='bg-[#2c2c2c] text-white p-4 rounded-3xl'
                        onClick={handleGetDirections}>
                        Get Directions
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FinalCard;
