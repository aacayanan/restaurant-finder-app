import React from 'react';
import Logo from '../assets/findherrestaurantlogo.webp';

function Navbar(props) {
    return (
        <div>
            <div className="flex justify-around items-center">
                {/* Name Logo */}
                <div className="h-10 flex items-center gap-4">
                    <div className="w-12 h-12 overflow-hidden relative">
                        <img
                            src={Logo}
                            alt="logo"
                            className="absolute w-auto h-auto left-1/2 top-1/2 transform scale-120 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        />
                    </div>
                    <div className="text-black text-2xl font-medium">Munch.</div>
                </div>

                {/* Dropdown Menu */}
                <div className="bg-white">
                    <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                        <button className="relative w-10 h-8 cursor-pointer">
                            {/* First Bar */}
                            <span className="absolute h-1 w-full bg-black rounded-lg top-0"></span>
                            {/* Second Bar */}
                            <span className="absolute h-1 w-full bg-black rounded-lg top-1/2 -translate-y-1/2"></span>
                            {/* Third Bar */}
                            <span className="absolute h-1 w-full bg-black rounded-lg top-full -translate-y-full"></span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
