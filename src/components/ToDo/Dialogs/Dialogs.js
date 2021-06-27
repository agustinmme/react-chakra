import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  Button,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogContent,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Dialogs({ _onDelete, id, _theme }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      <IconButton
        variant={_theme}
        icon={<DeleteIcon />}
        m={1}
        colorScheme="red"
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Tarea
            </AlertDialogHeader>

            <AlertDialogBody>
              Estas seguro? No vas a poder volver atras.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  _onDelete(id);
                }}
                ml={3}
              >
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default Dialogs;
