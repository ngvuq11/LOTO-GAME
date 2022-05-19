import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import Routers from "./routes";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
class App extends Component {
  render() {
    return (
      <ChakraProvider resetCSS={true} theme={theme}>
        <Routers />
      </ChakraProvider>
    );
  }
}

export default App;
