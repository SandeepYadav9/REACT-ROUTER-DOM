import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Login from "../components/Login/Login";
const HomeNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default HomeNavigator;
