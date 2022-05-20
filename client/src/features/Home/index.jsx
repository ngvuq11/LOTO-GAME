import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import PropTypes from "prop-types";

// Home.propTypes = {};

function Home(props) {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}

export default Home;
