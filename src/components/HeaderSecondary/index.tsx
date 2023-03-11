import { ArrowBackIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, TagRightIcon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../Header/Logo";

export function HeaderSecondary() {
  const router = useRouter();
  return (
    <Box bgColor="white">
      <Flex as="header" w="100%" h="8vh" mx="auto" p="6" align="center">
        <IconButton
          colorScheme="gray"
          variant="outline"
          aria-label="Back"
          fontSize="20px"
          icon={<ArrowBackIcon />}
          onClick={() => router.back()}
          rounded="full"
          mr={3}
        />
        <Logo />
        <Flex align="center" ml="auto"></Flex>
      </Flex>
    </Box>
  );
}
