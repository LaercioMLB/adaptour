import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import section2 from "../../public/section2.png";

export default function Section2() {
  const router = useRouter();
  return (
    <Box>
      <Box
        w="100%"
        mx="auto"
        p="6"
        alignItems="center"
        maxWidth={1480}
        color="gray.900"
      >
        <SimpleGrid columns={2} spacing={10} minChildWidth="300px">
          <Flex direction="column" align="center">
            <Image
              src={section2}
              alt="Vercel Logo"
              width={500}
              height={500}
              priority
            />
          </Flex>
          <Flex direction="column" justify="center">
            <Heading as="h2" size="2xl">
              Como funciona?
            </Heading>
            <Text fontSize="2xl" fontWeight="medium" mt={10}>
              Criar um roteiro de viagem baseado na necessidade de
              acessibilidade pessoal atendendo multiplas limitações, como:
              Limitação física, deficiência auditiva, deficiência visual,
              limitação intelectual.
            </Text>
            <Button
              mt={10}
              colorScheme="orange"
              maxWidth={180}
              onClick={() => router.push("/login")}
            >
              Crie seu roteiro
            </Button>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
