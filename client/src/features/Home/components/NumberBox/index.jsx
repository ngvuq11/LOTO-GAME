import { AspectRatio, Box, GridItem } from "@chakra-ui/react";
import React from "react";

const NumberBox = ({ number, active, lastRecord }) => {
  const isNumberCardBackground = () => {
    if (lastRecord) return "red.500";
    if (active) return "blue.500";
    return "gray.300";
  };

  return (
    <GridItem colSpan={1}>
      <AspectRatio ratio={1}>
        <Box
          bg={isNumberCardBackground()}
          borderRadius="100rem"
          cursor="pointer"
        >
          {number}
        </Box>
      </AspectRatio>
    </GridItem>
  );
};
export default NumberBox;
