import { Box, Button, Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import TableNumber from "../../components/TableNumber";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <Box>
      <Container maxW={1120}>
        <Grid templateColumns="repeat(20, 1fr)" gap={6}>
          <GridItem colSpan={10} w="100%">
            <TableNumber />
            <Button w="100%" onClick={() => console.log("123")}>
              Get Number
            </Button>
          </GridItem>
          <GridItem colSpan={10} w="100%" h="10" bg="blue.500" />
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
