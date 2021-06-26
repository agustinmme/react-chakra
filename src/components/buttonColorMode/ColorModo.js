import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ColorModo() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      <IconButton
        ml={8}
        icon={isDark ? <SunIcon color="yellow" /> : <MoonIcon color="dark" />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </div>
  );
}

export default ColorModo;
