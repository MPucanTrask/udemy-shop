import React from "react";
import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage";
import Contact from "./pages/Contact/Contact";
import SignIn from "./components/SignIn/SignIn";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="*" element={NoMatchPage} />
      </Routes>
    </div>
  );
}

export default App;
