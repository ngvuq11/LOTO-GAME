import { AspectRatio, Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

TableNumber.propTypes = {};

function TableNumber(props) {
  const arrNumber = [];
  for (let number = 1; number < 100; number++) {
    arrNumber.push(number);
  }
  return (
    <Grid
      templateColumns="repeat(10, 1fr)"
      gap={2}
      p={10}
      border="1px solid #eee"
      mb={10}
    >
      {arrNumber.map((number, index) => (
        <GridItem key={index} colSpan={1}>
          <AspectRatio ratio={1}>
            <Box bg="gray.200" borderRadius="100rem" cursor="pointer">
              {number}
            </Box>
          </AspectRatio>
        </GridItem>
      ))}
    </Grid>
  );
}

export default TableNumber;
