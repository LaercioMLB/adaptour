import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "./Logo";
import { MenuList } from "./MenuList";

export function Header() {
  const router = useRouter();
  return (
    <Box bgColor="white">
      <Flex
        as="header"
        w="100%"
        h="20"
        mx="auto"
        p="6"
        align="center"
        maxWidth={1480}
      >
        <Logo />
        <Flex align="center" ml="auto">
          <MenuList />
          <Button
            colorScheme="orange"
            onClick={() => router.push("/login")}
            ml={5}
          >
            Crie seu roteiro
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
