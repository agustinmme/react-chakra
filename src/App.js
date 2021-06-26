import "./App.css";

import Form from "./components/ToDo/ToDo";
import {  Flex, Box } from "@chakra-ui/react";
import Usuario from "./components/user/Usuario";
import ColorModo from "./components/buttonColorMode/ColorModo";
function App() {



  return (
    <div className="App mt-5">
      <Flex align='center' justify='center'>
        <Box>
        <ColorModo/>
        </Box>
        <Box p="2" >
          <Usuario />
        </Box>
      </Flex>
      <Form ></Form>
    </div>
  );
}

export default App;
