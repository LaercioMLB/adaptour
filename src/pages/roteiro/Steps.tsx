import { useState } from "react";
import {
  Stack,
  Text,
  Button,
  Divider,
  IconButton,
  VStack,
  Box,
  Heading,
  Flex,
  SimpleGrid,
  Select,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import CountPeople from "@/components/Form/CountPeople";

function Steps() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack spacing={6}>
      <Stack direction="row" justifyContent="center" align="center">
        <Stack direction="column" justifyContent="center" align="center">
          {activeStep >= 1 ? (
            <IconButton
              sx={{ maxWidth: "25px", marginTop: "20px" }}
              variant="outline"
              backgroundColor="orange.100"
              aria-label="Send email"
              icon={<CheckIcon color="orange.500" />}
              rounded="full"
              border="2px"
              borderColor="orange.500"
            />
          ) : (
            <VStack>
              <Button
                sx={{ maxWidth: "25px", marginTop: "20px" }}
                variant={activeStep === 0 ? "solid" : "outline"}
                colorScheme="orange"
                rounded="full"
              >
                1
              </Button>
            </VStack>
          )}
          <Box>Destino</Box>
        </Stack>

        <Divider borderColor={activeStep >= 1 ? "orange.500" : "gray.300"} />
        <Stack direction="column" justifyContent="center" align="center">
          {activeStep >= 2 ? (
            <IconButton
              sx={{ maxWidth: "25px", marginTop: "20px" }}
              variant="outline"
              backgroundColor="orange.100"
              aria-label="Send email"
              icon={<CheckIcon color="orange.500" />}
              rounded="full"
              border="2px"
              borderColor="orange.500"
            />
          ) : (
            <Button
              sx={{ maxWidth: "25px", marginTop: "20px" }}
              variant={activeStep === 1 ? "solid" : "outline"}
              colorScheme="orange"
              rounded="full"
            >
              2
            </Button>
          )}
          <Box>Seleção</Box>
        </Stack>
        <Divider borderColor={activeStep >= 2 ? "orange.500" : "gray.300"} />
        <Stack direction="column" justifyContent="center" align="center">
          <Button
            sx={{ maxWidth: "25px", marginTop: "20px" }}
            variant={activeStep === 2 ? "solid" : "outline"}
            colorScheme="orange"
            rounded="full"
          >
            3
          </Button>
          <Box>Confirmação</Box>
        </Stack>
      </Stack>

      {activeStep === 0 && (
        <Box textAlign="center">
          <Box mt={10}>
            <Box textAlign="left" fontWeight={500}>
              Destino
            </Box>
            <Input variant="flushed" placeholder="Digite seu destino" />
          </Box>
          <Box mt={10}>
            <Box textAlign="left" fontWeight={500}>
              Ida
            </Box>
            <Input
              variant="flushed"
              placeholder="Select Date and Time"
              size="md"
              type="date"
            />
          </Box>
          <Box mt={10}>
            <Box textAlign="left" fontWeight={500}>
              Volta
            </Box>
            <Input
              variant="flushed"
              placeholder="Select Date and Time"
              size="md"
              type="date"
            />
          </Box>
          <Box mt={10}>
            <CountPeople title="Adulto" subtitle="13 anos ou mais" />
          </Box>
          <Button
            colorScheme="orange"
            size="lg"
            w={200}
            onClick={handleNext}
            mt={10}
          >
            Próximo
          </Button>
        </Box>
      )}

      {activeStep === 1 && (
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mt={10}>
            SÓ MAIS UM POUQINHO...
          </Heading>
          <SimpleGrid columns={1} spacing={4} mt={10}>
            <Select
              placeholder="ESTADO"
              size="lg"
              focusBorderColor="orange.500"
              bgColor="gray.100"
              variant="outline"
              _hover={{
                bgColor: "gray.100",
              }}
            >
              <option value="option1">Paraná</option>
              <option value="option2">São Paulo</option>
              <option value="option3">Brasília</option>
            </Select>
          </SimpleGrid>

          <Flex
            alignItems="center"
            justifyContent="space-around"
            gap={4}
            mt={10}
          >
            <Button colorScheme="gray" size="lg" w={200} onClick={handleBack}>
              Anterior
            </Button>
            <Button colorScheme="orange" size="lg" w={200} onClick={handleNext}>
              Próximo
            </Button>
          </Flex>
        </Box>
      )}

      {activeStep === 2 && (
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mt={10}>
            QUERO TE CONHECER{" "}
            <Text as="span" color="orange.500">
              :)
            </Text>
          </Heading>
          <Heading as="h1" size="xl" mt={4}>
            Me fale mais sobre você
          </Heading>
          <Text fontSize="xl" mt={4}>
            Por favor, nos informe sobre quaisquer necessidades ou limitações
            que possam impactar a sua interação com a cidade
          </Text>
          <SimpleGrid columns={1} spacing={4} mt={5}>
            <Checkbox size="lg" colorScheme="orange">
              Limitação física
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Deficiência auditiva
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Deficiência visual
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Limitação intelectual
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Múltiplas necessidades especiais
            </Checkbox>
            <Text fontSize="xl" mt={5} textAlign="left">
              Grau de deficiência
            </Text>
            <Checkbox size="lg" colorScheme="orange">
              Leve
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Moderado
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Grave
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Profundo
            </Checkbox>
            <Text fontSize="xl" mt={5} textAlign="left">
              Você utiliza algum tipo de equipamento ou auxílio?
            </Text>
            <Checkbox size="lg" colorScheme="orange">
              Cadeira de rodas
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Aparelho auditivo
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Prótese
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Bengala
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange">
              Outros
            </Checkbox>
          </SimpleGrid>

          <Flex
            alignItems="center"
            justifyContent="space-around"
            gap={4}
            mt={10}
          >
            <Button colorScheme="gray" size="lg" w={200} onClick={handleBack}>
              Anterior
            </Button>
            <Button
              colorScheme="orange"
              size="lg"
              w={200}
              onClick={() => console.log("Completed")}
              ml={4}
            >
              Finalizar
            </Button>
          </Flex>
        </Box>
      )}
    </Stack>
  );
}

export default Steps;
