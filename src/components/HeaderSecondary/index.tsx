import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../Header/Logo";

export function HeaderSecondary() {
  const router = useRouter();
  return (
    <Box bgColor="white" sx={{ position: "fixed", width: "100%" }}>
      <Flex
        as="header"
        w="100%"
        h="8vh"
        mx="auto"
        p="6"
        align="center"
        justifyContent={"space-between"}
      >
        <Logo />
        <CloseIcon sx={{ cursor: "pointer" }} />
      </Flex>
    </Box>
  );
}
