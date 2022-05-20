import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Home from "../../features/Home";
// import PropTypes from "prop-types";

// MainLayout.propTypes = {};

function MainLayout({ props }) {
  return (
    <Box>
      <Container maxW={1120}>
        <Tabs>
          <TabList>
            <Tab>Loto</Tab>
            <Tab>LuckyWheel</Tab>
            <Tab>CardsGame</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Home />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}

export default MainLayout;
