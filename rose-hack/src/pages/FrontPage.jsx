import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Buffer from "../components/Buffer.jsx";
import FrontPageImage from '../assets/rosehacknontransparent.png';
import SearchBar from "../components/SearchBar.jsx";
import DualButtons from "../components/DualButtons.jsx";

FrontPage.propTypes = {

};

function FrontPage(props) {
    return (
        <div className=''>
            {/*screen component*/}
            <div className='max-w-screen-sm'>
                <Buffer/>
                <Navbar/>
                {/*image component*/}
                <div>
                    <img src={FrontPageImage} alt="front page image" className="justify-self-center max-w-screen-sm"/>
                </div>
                <SearchBar/>
                <div className="flex justify-center p-4">
                    <DualButtons/>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;