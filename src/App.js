import React from "react";
import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import './App.css';
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="*" element={NoMatchPage}/>
      </Routes>
    </div>
  );
}

export default App;
