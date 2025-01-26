import React from 'react';
import PropTypes from 'prop-types';
import { CircleX, CircleCheck } from 'lucide-react';

ChoiceButtons.propTypes = {};

function ChoiceButtons(props) {
    return (
        <div className='flex justify-self-center space-x-28'>
            <button>
                <CircleX strokeWidth={1} className="w-20 h-20"/>
            </button>
            <button>
                <CircleCheck strokeWidth={1} className="w-20 h-20"/>
            </button>
        </div>
    );
}

export default ChoiceButtons;