import React from 'react';
import PropTypes from 'prop-types';
import { CircleX, CircleCheck } from 'lucide-react';
import {useNavigate} from "react-router";

ChoiceButtons.propTypes = {
    address: PropTypes.string,
    onCheckClick: PropTypes.func.isRequired,
};

function ChoiceButtons({ address, onCheckClick }) {
    const navigate = useNavigate();
    const handleXClick = () => {
        navigate(0);
    };
    return (
        <div className='flex justify-self-center space-x-28'>
            <button>
                <CircleX strokeWidth={1} className="w-20 h-20 hover:opacity-60" onClick={handleXClick}/>
            </button>
            <button>
                <CircleCheck strokeWidth={1} className="w-20 h-20 hover:opacity-60" onClick={onCheckClick}/>
            </button>
        </div>
    );
}

export default ChoiceButtons;