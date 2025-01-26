import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Buffer from "../components/Buffer.jsx";
import FrontPageImage from '../assets/rosehacknontransparent.png';
import SearchBar from "../components/SearchBar.jsx";
import DualButtons from "../components/DualButtons.jsx";
import FilterCard from "../components/FilterCard.jsx";

function FrontPage(props) {
    const [showFilterCard, setShowFilterCard] = useState(false);
    const [filterStates, setFilterStates] = useState({
        womanOwned: true,
        blackOwned: false,
        organicOptions: false,
        veganOptions: false,
        glutenFreeOptions: false,
    });

    const handleFilterButtonClick = () => {
        setShowFilterCard(true);
    };

    const handleCloseFilterCard = (newFilterStates) => {
        setFilterStates(newFilterStates);
        setShowFilterCard(false);
    };

    return (
        <div className='relative'>
            <div className='max-w-screen-sm relative'>
                <Buffer/>
                <Navbar/>
                <div>
                    <img src={FrontPageImage} alt="front page image" className="justify-self-center max-w-screen-sm"/>
                </div>
                <SearchBar/>
                <div className="flex justify-center p-4">
                    <DualButtons onFilterButtonClick={handleFilterButtonClick}/>
                </div>
                {showFilterCard && (
                    <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                        <FilterCard filterStates={filterStates} onClose={handleCloseFilterCard} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FrontPage;