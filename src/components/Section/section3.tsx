import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import section3 from "../../public/section3.png";

export default function Section3() {
  const router = useRouter();
  return (
    <Box bgColor="orange.300">
      <Box
        w="100%"
        mx="auto"
        p="6"
        alignItems="center"
        maxWidth={1480}
        color="gray.50"
      >
        <SimpleGrid columns={2} spacing={10} minChildWidth="300px">
          <Flex direction="column" justify="center">
            <Heading as="h2" size="2xl">
              O que é o Adaptour?
            </Heading>
            <Text fontSize="2xl" fontWeight="medium" mt={10}>
              É um projeto criado no evento Hackatour Cataratas 2023. Tendo o
              foco em auxiliar e fomentar a acessibilidade em Foz do Iguaçu.
              Aonde a pessoas com alguma necessidade terão mais confiança e
              aproveitar melhor seu turismo na cidade
            </Text>
            <Button
              mt={10}
              bgColor="gray.900"
              _hover={{ backgroundColor: "gray.700" }}
              maxWidth={180}
              onClick={() => router.push("/tourims-accessibility")}
            >
              Saiba mais
            </Button>
          </Flex>
          <Flex direction="column" align="center">
            <Image
              src={section3}
              alt="Vercel Logo"
              width={500}
              height={500}
              priority
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
