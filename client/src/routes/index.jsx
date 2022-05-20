import React from "react";
// import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../features/Home";

// Routers.propTypes = {};

function Routers(props) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Routers;
