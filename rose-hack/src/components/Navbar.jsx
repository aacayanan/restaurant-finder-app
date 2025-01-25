import React from 'react';

function Navbar(props) {
    return (
        <div>
            <div className="flex justify-around items-center p-4">
                {/* Name Logo */}
                <div className="h-10 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#d9d9d9]"></div>
                    <div className="text-black text-2xl font-medium">Program Name</div>
                </div>

                {/* Dropdown Menu */}
                <button className="relative w-10 h-8 cursor-pointer">
                    {/* First Bar */}
                    <span className="absolute h-1 w-full bg-black rounded-lg top-0"></span>
                    {/* Second Bar */}
                    <span className="absolute h-1 w-full bg-black rounded-lg top-1/2 -translate-y-1/2"></span>
                    {/* Third Bar */}
                    <span className="absolute h-1 w-full bg-black rounded-lg top-full -translate-y-full"></span>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
