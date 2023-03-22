import { useState } from "react";
import {
  Stack,
  Text,
  Button,
  Box,
  Heading,
  Flex,
  SimpleGrid,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import InputCountPeople from "@/components/Form/InputCountPeople";
import InputText from "@/components/Form/InputText";
import InputDate from "@/components/Form/InputDate";
import Stepper from "@/components/Step";

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
      <Stepper
        stepNumber={activeStep}
        stepOne="Destino"
        stepTwo="Seleção"
        stepThree="Confirmação"
      />
      {activeStep === 0 && (
        <Box textAlign="center">
          <InputText label="Destino" placeholder="Digite seu destino" />
          <InputDate label="Ida" placeholder="Selecione a data de ida" />
          <InputDate label="Volta" placeholder="Selecione a data de volta" />
          <InputCountPeople title="Adulto" subtitle="13 anos ou mais" />
          <InputCountPeople title="Crianças" subtitle="Idade 2 - 12" />
          <InputCountPeople title="Animais de estimação" />
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
