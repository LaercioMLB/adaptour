import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import section1 from "../../public/section1.png";

export default function Section1() {
  const router = useRouter();
  return (
    <Box bgColor="orange.300">
      <Box
        w="100%"
        h="500"
        mx="auto"
        p="6"
        alignItems="center"
        maxWidth={1480}
        color="gray.50"
      >
        <SimpleGrid columns={2} spacing={10}>
          <Flex direction="column" justify="center">
            <Heading as="h2" size="2xl">
              Conheça o mundo<Text> sem ter medo!</Text>
            </Heading>
            <Text fontSize="2xl" fontWeight="medium" mt={10}>
              Tenha facilidade em achar em explorar a cidade com toda a
              orientação de acessibilidade
            </Text>
            <Button
              mt={10}
              bgColor="gray.900"
              _hover={{ backgroundColor: "gray.700" }}
              maxWidth={180}
              onClick={() => router.push("/conheca-mundo")}
            >
              Saiba mais
            </Button>
          </Flex>
          <Flex direction="column" align="center">
            <Image
              src={section1}
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
