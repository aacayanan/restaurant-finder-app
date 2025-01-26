import './App.css'
import FrontPage from "./pages/FrontPage.jsx"
import RestaurantPage from "./pages/RestaurantPage.jsx"

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import FilterCard from "./components/FilterCard.jsx";
import FinalCard from "./components/FinalCard.jsx";

function App() {

    return (
        // <>
        //     <FrontPage/>
        // </>

        <Router>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/restaurant" element={<RestaurantPage/>}/>
                <Route path="/final" element={<FinalCard/>}/>
            </Routes>
        </Router>
    )
}

export default App
