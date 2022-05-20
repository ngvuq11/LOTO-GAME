import { Box, Button, Grid } from "@chakra-ui/react";
import React from "react";
import NumberBox from "../NumberBox";

// TableNumber.propTypes = {};

const TableNumber = ({
  handleGetNumber,
  numberArray,
  lotoRecord,
  numberCardDisabled,
}) => {
  const arrNumber = [];
  for (let number = 1; number < 100; number++) {
    arrNumber.push(number);
  }
  const onClickGetNumber = () => {
    handleGetNumber();
  };

  return (
    <Box>
      <Grid
        templateColumns="repeat(11, 1fr)"
        gap={2}
        p={10}
        border="1px solid #eee"
      >
        {arrNumber.map((number) => (
          <NumberBox
            number={number}
            key={number}
            active={lotoRecord.some((i) => i === number) ? true : false}
            lastRecord={lotoRecord[lotoRecord.length - 1] === number}
          />
        ))}
      </Grid>
      <Button
        colorScheme="teal"
        size="lg"
        w="100%"
        variant="solid"
        onClick={onClickGetNumber}
        disabled={numberCardDisabled}
      >
        Get Number
      </Button>
    </Box>
  );
};

export default TableNumber;
