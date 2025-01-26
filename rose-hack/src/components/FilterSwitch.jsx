import React, { useState } from 'react';
import PropTypes from 'prop-types';

FilterSwitch.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
};

function FilterSwitch({ label, checked }) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="h-6 flex items-center p-4">
            <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal leading-snug">{label}</div>
            <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="peer hidden" checked={isChecked} onChange={handleChange} />
                <div className="w-full h-full bg-slate-500/40 rounded-full transition-all duration-300 ease-in-out peer-checked:bg-pink-500"></div>
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-slate-500/60 rounded-full shadow-md transition-all duration-300 ease-in-out peer-checked:translate-x-full peer-checked:border-pink-500 peer-hover:shadow-[0_0_0_8px_rgba(0,0,0,0.15)] peer-checked:hover:shadow-[0_0_0_8px_rgba(236,72,153,0.15)]"></div>
            </label>
        </div>
    );
}

export default FilterSwitch;