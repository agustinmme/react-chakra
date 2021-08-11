import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Text, Badge, Flex, Avatar, AvatarBadge } from "@chakra-ui/react";

function Usuario({ posteos }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex m={3} justify="center" align="center">
      <Avatar src="https://picsum.photos/200/300?grayscale" size="xl">
        {posteos > 0 ? (
          <AvatarBadge boxSize="1em" bg="green.500">
            <Text color={isDark ? "black" : "white"} fontSize="sm">
              {posteos}
            </Text>
          </AvatarBadge>
        ) : (
          <></>
        )}
      </Avatar>
      <Box ml="3">
        <Text fontWeight="bold">
          Mikel Castellano
          <Badge
            ml="1"
            colorScheme={
              posteos >= 7
                ? "purple"
                : posteos >= 5
                ? "yellow"
                : posteos >= 3
                ? "gray"
                : "orange"
            }
          >
            {posteos >= 7
              ? "DIAMOND"
              : posteos >= 5
              ? "GOLD"
              : posteos >= 3
              ? "SILVER"
              : "BRONZE"}
          </Badge>
        </Text>
        <Text fontSize="sm">Chakra-ui</Text>
      </Box>
    </Flex>
  );
}

export default Usuario;
