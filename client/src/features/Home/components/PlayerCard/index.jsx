// import PropTypes from "prop-types";
import { Box, Button, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

// PlayerCard.propTypes = {};

function PlayerCard(props) {
  const { playerName, playerNumbers, lotoRecord } = props;
  const isActive = (number) => {
    if (lotoRecord.some((i) => i === number)) return "blue.500";
    return "gray.300";
  };

  return (
    <Box border="1px solid #eee" mt="15px" p={15}>
      <Heading as="h4" size="md">
        {playerName}
      </Heading>
      <Divider />
      <SimpleGrid mt="15px" columns={5} spacing="10px">
        {playerNumbers.map((number) => (
          <Button bg={isActive(number)}>{number}</Button>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PlayerCard;
