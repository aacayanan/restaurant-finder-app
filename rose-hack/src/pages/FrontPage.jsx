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
        localBusiness: false,
        veganOptions: false,
        glutenFreeOptions: false,
    });
    const [location, setLocation] = useState('');
    const [hasError, setHasError] = useState(false);

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
                <SearchBar location={location} setLocation={setLocation} hasError={hasError}/>
                <div className="flex justify-center p-4">
                    <DualButtons onFilterButtonClick={handleFilterButtonClick} location={location} setLocation={setLocation} setHasError={setHasError} states={filterStates}/>
                </div>
                {showFilterCard && (
                    <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
                        <FilterCard filterStates={filterStates} setFilterStates={setFilterStates} onClose={handleCloseFilterCard} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FrontPage;