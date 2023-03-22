import { useState } from "react";
import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";

interface OkCancelButtonProps {
  okLabel: string;
  cancelLabel: string;
  okSubmit: () => void;
  cancelSubmit: () => void;
}

export default function OkCancelButton({
  okLabel,
  cancelLabel,
  okSubmit,
  cancelSubmit,
}: OkCancelButtonProps) {
  return (
    <Flex
      sx={{ paddingTop: "50px" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        colorScheme="gray"
        color="white"
        size="lg"
        w={200}
        onClick={cancelSubmit}
      >
        {cancelLabel}
      </Button>
      <Button colorScheme="orange" size="lg" w={200} onClick={okSubmit}>
        {okLabel}
      </Button>
    </Flex>
  );
}
