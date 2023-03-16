import { Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as="footer"
      justify="center"
      align="center"
      w="100%"
      h="100px"
      bg="white"
      borderTop="1px solid #eee"
    >
      <Text fontSize="sm" fontWeight="bold">
        © 2023 Todos os direitos reservados
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="orange" mx="2">
        |
      </Text>
      <Text fontSize="sm" fontWeight="bold">
        Feito com{" "}
        <Text as="span" color="orange.500">
          ♥
        </Text>{" "}
        por Adap
        <Text as="span" color="orange.500">
          tour
        </Text>
      </Text>
    </Flex>
  );
}

export default Footer;
