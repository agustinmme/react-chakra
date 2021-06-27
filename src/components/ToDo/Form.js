import React from "react";

import { Button, Input, InputLeftAddon, InputGroup } from "@chakra-ui/react";

function Form({ onEnvio, color, texto, nom, changeNom }) {
  return (
    <>
      <form onSubmit={onEnvio} className="row">
        <InputGroup>
          <InputLeftAddon children="Tarea" />
          <Input
            placeholder="Introduce texto"
            variant="outline"
            size="md"
            value={nom}
            onChange={(e) => {
              changeNom(e.target.value);
            }}
          />
        </InputGroup>
        <Button m={4} type="submit" colorScheme={color}>
          {texto}
        </Button>
      </form>
    </>
  );
}

export default Form;
