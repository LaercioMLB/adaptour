import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "./Logo";
import { MenuList } from "./MenuList";

export function Header() {
  const router = useRouter();
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      p="6"
      align="center"
      bgColor="white"
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
  );
}
