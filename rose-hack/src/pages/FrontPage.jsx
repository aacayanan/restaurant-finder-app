import React from 'react';
import Navbar from "../components/Navbar.jsx";

FrontPage.propTypes = {

};

function FrontPage(props) {
    return (
        <div className=''>
            {/*screen component*/}
            <div className='max-w-screen-sm'>
                <Navbar/>
            </div>
        </div>
    );
}

export default FrontPage;