import React, { useState } from "react";
import { Container, Heading, Stack } from "@chakra-ui/react";
import Mensaje from "./Mensaje";
import Form from "./Form";
import ListPlus from "./ListPlus";
import uniqid from "uniqid";
import { useColorMode } from "@chakra-ui/color-mode";

const Formulario = ({ getPost, num }) => {
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
      getPost(num + 1);
    }
  };

  const deleteNombre = (id) => {
    if (!modEdit) {
      const newArray = Listado.filter((item) => item.id !== id);
      setListado(newArray);
      setNombre("");
      getPost(num - 1);
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
        <ListPlus
          Lista={Listado}
          onDelete={deleteNombre}
          onEdit={edit}
          theme={isDark}
        />

        {error !== null ? (
          <Mensaje title="Error!" message={error} type={!modEdit ? "1" : "2"} />
        ) : (
          <></>
        )}
        <Form
          onEnvio={modEdit ? EditName : addDate}
          color={modEdit ? "green" : "blue"}
          texto={modEdit ? "Aceptar" : "Agregar"}
          nom={nombre}
          changeNom={setNombre}
        />
      </Stack>
    </Container>
  );
};

export default Formulario;
