import React from "react";
import {
  IconButton,
  ListItem,
  ListIcon,
  Box,
  Spacer,
  Text,
  List,
} from "@chakra-ui/react";

import Dialogs from "./Dialogs/Dialogs";
import { ArrowRightIcon, EditIcon } from "@chakra-ui/icons";

function ListPlus({ Lista, onDelete, onEdit, theme }) {
  return (
    <Box
      bg={("white", "blackAlpha.200")}
      py="8"
      px={{ base: "4", md: "10" }}
      shadow="base"
      rounded={{ sm: "lg" }}
    >
      <List spacing={3}>
        {Lista.map((item) => (
          <ListItem key={item.id}>
            <Box d="flex" alignItems="baseline">
              <ListIcon as={ArrowRightIcon} color="green.500" />
              <Text w="50%" color="gray.500" isTruncated>
                {item.dato}
              </Text>
              <Spacer />
              <Dialogs
                _onDelete={onDelete}
                id={item.id}
                _theme={theme ? "outline" : "solid"}
              />
              <IconButton
                variant={theme ? "outline" : "solid"}
                icon={<EditIcon />}
                m={1}
                onClick={() => {
                  onEdit(item);
                }}
                colorScheme="blue"
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ListPlus;
