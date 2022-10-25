import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "views/About";
import Home from "views/Home";

export default function RootRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    );
}
