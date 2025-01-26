import './App.css'
import FrontPage from "./pages/FrontPage.jsx"
import RestaurantPage from "./pages/RestaurantPage.jsx"

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import FilterCard from "./components/FilterCard.jsx";

function App() {

    return (
        // <>
        //     <FrontPage/>
        // </>

        <Router>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/restaurant" element={<RestaurantPage/>}/>
                <Route path="/filter" element={<FilterCard/>}/>
            </Routes>
        </Router>
    )
}

export default App
