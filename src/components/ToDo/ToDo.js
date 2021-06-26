import React, { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  InputLeftAddon,
  InputGroup,
  Container,
  Text,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  Box,
  Spacer,
} from "@chakra-ui/react";
import Mensaje from "./Mensaje";
import { ArrowRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import uniqid from "uniqid";
import { useColorMode } from "@chakra-ui/color-mode";

const Formulario = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [nombre, setNombre] = useState("");
  const [id, setId] = useState("");
  const [Listado, setListado] = useState([]);

  const [modEdit, setModEdit] = useState(false);

  const [error, setError] = useState(null);

  const addDate = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      setError("No puede agregar texto vacio.");
      return;
    } else {
      const nuevoDato = {
        id: uniqid(),
        dato: nombre,
      };
      setListado([...Listado, nuevoDato]);
      setNombre("");
      setError(null);
    }
  };

  const deleteNombre = (id) => {
    if (!modEdit) {
      const newArray = Listado.filter((item) => item.id !== id);
      setListado(newArray);
      setNombre("");
    } else {
      setError("no puedes borrar mientras editas");
    }
  };

  const edit = (item) => {
    setModEdit(true);
    setNombre(item.dato);
    setId(item.id);
    setError(null);
  };

  const EditName = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      setError("No puedes cambiar el nombre a vacio...");
      return;
    }
    const NuevoArray = Listado.map((item) =>
      item.id === id ? { id: id, dato: nombre } : item
    );
    setListado(NuevoArray);
    setModEdit(false);
    setNombre("");
    setError(null);
  };
  return (
    <Container maxW="container.md" mt={5}>
      <Stack spacing={4}>
        <Heading>TODO APP</Heading>
        <Box
          bg={("white", "blackAlpha.200")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <List spacing={3}>
            {Listado.map((item) => (
              <ListItem key={item.id}>
                <Box d="flex" alignItems="baseline">
                  <ListIcon as={ArrowRightIcon} color="green.500" />
                  <Text w="50%" color="gray.500" isTruncated>
                    {item.dato}
                  </Text>
                  <Spacer />
                  <IconButton
                    variant={isDark ? "outline" : "solid"}
                    icon={<DeleteIcon />}
                    m={1}
                    onClick={() => {
                      deleteNombre(item.id);
                    }}
                    colorScheme="red"
                  />
                  <IconButton
                    variant={isDark ? "outline" : "solid"}
                    icon={<EditIcon />}
                    m={1}
                    onClick={() => {
                      edit(item);
                    }}
                    colorScheme="blue"
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        {error !== null ? (
          <Mensaje title="Error!" message={error} type={!modEdit ? "1" : "2"} />
        ) : (
          <></>
        )}
        <form onSubmit={modEdit ? EditName : addDate} className="row">
          <InputGroup>
            <InputLeftAddon children="Tarea" />
            <Input
              placeholder="Introduce texto"
              variant="outline"
              size="md"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </InputGroup>
          <Button m={4} type="submit" colorScheme={modEdit ? "green" : "blue"}>
            {modEdit ? "Aceptar" : "Agregar"}
          </Button>
        </form>
      </Stack>
    </Container>
  );
};

export default Formulario;
