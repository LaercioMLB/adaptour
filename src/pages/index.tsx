import { Input } from "@/components/Form/input";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Text>Turism accessibility</Text>
      <Flex>
        <Box bg="orange.700" width={500} height={500}>
          <Center>Laranja forte</Center>
          <Center>
            {" "}
            <Text color="gray.50">Turism accessibility</Text>
          </Center>
        </Box>
        <Box bg="orange.500" width={500} height={500}>
          <Center>Laranja forte</Center>
          <Center>
            {" "}
            <Text color="gray.50">Turism accessibility</Text>
          </Center>
        </Box>
        <Box bg="orange.300" width={500} height={500}>
          <Center>Laranja forte</Center>
          <Center>
            {" "}
            <Text color="gray.50">Turism accessibility</Text>
          </Center>
        </Box>
      </Flex>
      <Button colorScheme="orange" size="lg" m={2}>
        Botao
      </Button>
      <Input name="input" label="Nome completo" mb={10} />
      <Input name="input" label="Endereço " mb={10} />
    </>
  );
}
