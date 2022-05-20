import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

// AddPlayerModal.propTypes = {};

function AddPlayerModal(props) {
  const { handleCloseModal, handleAddPlayer } = props;
  const [inputNumber, setInputNumber] = useState(false);
  const [arrNumberPick, setArrNumberPick] = useState([]);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    selectedNumbers: [],
  });
  const onClickAddPlayer = () => {
    if (formData.name === "" || formData.selectedNumbers.length === 0) {
      alert("Please fill all fields");
      return;
    }
    handleAddPlayer({
      ...formData,
      selectedNumbers: arrNumberPick,
    });
    setFormData({
      name: "",
      selectedNumbers: [],
    });
  };

  const randomFiveNumber = () => {
    if (arrNumberPick.length === 5) return;
    setInputNumber(true);
    const arr = [];
    for (let index = arrNumberPick.length; index < 5; index++) {
      const random = Math.floor(Math.random() * 99) + 1;
      if (arrNumberPick.some((number) => number === random)) {
        randomFiveNumber();
      }
      arr.push(random);
    }
    setArrNumberPick(arr);
  };

  const handleChangeName = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      name: value,
    }));
  };
  const handleChangeNumber = (e) => {
    const { value } = e.target;
    setValue("");
    console.log(value);
  };

  return (
    <Box position="fixed" inset="0" bg="rgba(0,0,0,0.5)">
      <VStack
        w="100%"
        spacing={3}
        p="15px"
        border="1px solid #eee"
        rounded="7px"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        bg="#fff"
        maxW={["100%", "500px"]}
      >
        <Box w="100%">
          <Text mb="10px" fontSize="xl">
            Player name:
          </Text>
          <Input placeholder="Your name..." onChange={handleChangeName} />
        </Box>
        <VStack w="100%">
          <Grid templateColumns="repeat(10, 1fr)" gap={0} w="100%">
            <GridItem w="100%" colSpan={7}>
              <Text fontSize="xl">Type your numbers:</Text>
            </GridItem>
            <GridItem w="100%" colSpan={3}>
              <Button onClick={randomFiveNumber}>Random</Button>
            </GridItem>
          </Grid>
          {inputNumber ? (
            <Flex gap="10px" w="100%">
              {arrNumberPick.map((number) => (
                <Input
                  key={number}
                  flex="1"
                  bg="gray.200"
                  value={number}
                  onFocus={(value) => handleChangeNumber(value)}
                />
                // {number}
                // </Input>
              ))}
            </Flex>
          ) : (
            <Flex gap="10px" w="100%">
              <NumberInput min={1} max={99}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput min={1} max={99}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput min={1} max={99}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput min={1} max={99}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput min={1} max={99}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          )}
        </VStack>
        <HStack w="100%" justifyContent="flex-end">
          <Button variant="outline" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            rightIcon={<AiOutlineArrowRight />}
            colorScheme="teal"
            onClick={onClickAddPlayer}
          >
            Confirm
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default AddPlayerModal;
