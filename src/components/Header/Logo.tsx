import { Flex, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex>
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="96">
        Adap
        <Text as="span" color="orange.500">
          tour
        </Text>
      </Text>
    </Flex>
  );
}
