import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Mensaje(props) {
  const { type, title, message } = props;
  return (
    <div>
      <Alert
        status={type==="1"?"info":"warning"}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {title}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {message}
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default Mensaje;
