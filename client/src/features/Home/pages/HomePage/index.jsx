import { Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddPlayerModal from "../../components/AddPlayerModal";
import PlayerCard from "../../components/PlayerCard";
import TableNumber from "../../components/TableNumber";

HomePage.propTypes = {};

function HomePage(props) {
  const [numberArray, setNumberArray] = useState([]);
  const [lotoRecord, setLotoRecord] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [players, setPlayers] = useState([]);

  console.log("players", players);

  const handleAddPlayer = (playerInfoFormData) => {
    setPlayers([...players, playerInfoFormData]);
    setIsOpen(false);
  };

  const playRules = {
    totalNumberPerGame: 99,
    selectNumberPerGame: 5,
  };

  useEffect(() => {
    setNumberArray((prev) => {
      for (let item = 1; item < playRules.totalNumberPerGame + 1; item++) {
        if (prev.some((i) => i === item)) return prev;
        prev.push(item);
      }
      return [...prev];
    });
  }, []);

  const randomNumber = (checkArray) => {
    const random = Math.floor(Math.random() * playRules.totalNumberPerGame) + 1;
    if (checkArray.some((number) => number === random))
      return randomNumber(checkArray);

    return random;
  };

  const handleGetNumber = () => {
    if (players.length === 0) {
      alert("Please add player");
      return;
    }
    setLotoRecord((prev) => {
      prev.push(randomNumber(prev));
      return [...prev];
    });
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const numberCardDisabled =
    lotoRecord.length === playRules.totalNumberPerGame ? true : false;

  return (
    <Grid templateColumns="repeat(20, 1fr)" gap={6}>
      <GridItem colSpan={10} w="100%">
        <TableNumber
          handleGetNumber={handleGetNumber}
          numberArray={numberArray}
          lotoRecord={lotoRecord}
          numberCardDisabled={numberCardDisabled}
        />
      </GridItem>
      <GridItem colSpan={10} w="100%" position="relative">
        <Button
          leftIcon={<AiOutlinePlus />}
          colorScheme="teal"
          variant="solid"
          onClick={handleOpenModal}
        >
          Add Player
        </Button>
        {players.map((player) => (
          <PlayerCard
            playerName={player.name}
            playerNumbers={player.selectedNumbers}
            lotoRecord={lotoRecord}
          />
        ))}

        {isOpen ? (
          <AddPlayerModal
            handleCloseModal={() => setIsOpen(false)}
            handleAddPlayer={handleAddPlayer}
          />
        ) : (
          ""
        )}
      </GridItem>
    </Grid>
  );
}

export default HomePage;
