import React from "react";
import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import './App.css';

const HatsPage = () => {
    return (
        <h2>Hats Page</h2>
    )
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/hats" element={<HatsPage />} />
        </Routes>
    </div>
  );
}

export default App;
