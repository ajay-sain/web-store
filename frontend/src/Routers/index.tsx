import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default Routers;