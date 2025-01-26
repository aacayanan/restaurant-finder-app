import './App.css'
import FrontPage from "./pages/FrontPage.jsx"
import RestaurantPage from "./pages/RestaurantPage.jsx"

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {

    return (
        // <>
        //     <FrontPage/>
        // </>

        <Router>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/restaurant" element={<RestaurantPage/>}/>
            </Routes>
        </Router>
    )
}

export default App
