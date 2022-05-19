import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
// import PropTypes from "prop-types";

// MainLayout.propTypes = {};

function MainLayout({ props }) {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}

export default MainLayout;
