import React from "react";
import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
        </Routes>
    </div>
  );
}

export default App;
