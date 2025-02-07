import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

EndSearchCard.propTypes = {

};

function EndSearchCard(props) {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate("/");
    }

    const continueSearch = () => {
        navigate(0);
    }

    return (
        <div className='bg-black/30 min-h-screen flex justify-center align-center w-full border-2'>
            <div className='flex flex-col justify-center'>
                <div className='bg-white flex-col place-content-center rounded-3xl w-80 h-44'>
                    <div className='flex justify-center font-semibold pb-4'>
                        That's ten and no luck! :(
                    </div>
                    <div className='flex flex-row justify-center space-x-5'>
                        <div className='flex justify-center'>
                            <button className='cursor-pointer text-gray-500 hover:underline'
                                    onClick={returnHome}>
                                Return Home
                            </button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#2c2c2c] flex justify-center text-white p-4 rounded-3xl'
                                    onClick={continueSearch}>
                                Continue Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EndSearchCard;