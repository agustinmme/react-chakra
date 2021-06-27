import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo/ToDo";
import { Flex, Box } from "@chakra-ui/react";
import Usuario from "./components/ToDo/user/Usuario";
import ColorModo from "./components/buttonColorMode/ColorModo";
function App() {
  const [post, setPost] = useState(0); // Es un arreglo rapido para no refactorizar mas...

  return (
    <div className="App mt-5">
      <Flex align="center" justify="center">
        <Box>
          <ColorModo />
        </Box>
        <Box p="2">
          <Usuario posteos={post} />
        </Box>
      </Flex>
      <ToDo getPost={setPost} num={post}></ToDo>
    </div>
  );
}

export default App;
