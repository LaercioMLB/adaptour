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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Input } from "../Form/input";

function StepRegister() {
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
        {activeStep >= 1 ? (
          <IconButton
            variant="outline"
            backgroundColor="orange.100"
            aria-label="Send email"
            icon={<CheckIcon color="orange.500" />}
            _hover={{ backgroundColor: "orange.100" }}
            rounded="full"
            border="2px"
            borderColor="orange.500"
          />
        ) : (
          <VStack>
            <Button
              variant={activeStep === 0 ? "solid" : "outline"}
              colorScheme="orange"
              onClick={() => setActiveStep(0)}
              rounded="full"
            >
              1
            </Button>
          </VStack>
        )}

        <Divider borderColor={activeStep >= 1 ? "orange.500" : "gray.300"} />
        {activeStep >= 2 ? (
          <IconButton
            variant="outline"
            backgroundColor="orange.100"
            aria-label="Send email"
            icon={<CheckIcon color="orange.500" />}
            _hover={{ backgroundColor: "orange.100" }}
            rounded="full"
            border="2px"
            borderColor="orange.500"
          />
        ) : (
          <Button
            variant={activeStep === 1 ? "solid" : "outline"}
            colorScheme="orange"
            onClick={() => setActiveStep(0)}
            rounded="full"
          >
            2
          </Button>
        )}
        <Divider borderColor={activeStep >= 2 ? "orange.500" : "gray.300"} />

        <Button
          variant={activeStep === 2 ? "solid" : "outline"}
          colorScheme="orange"
          onClick={() => setActiveStep(1)}
          rounded="full"
        >
          3
        </Button>
      </Stack>

      {activeStep === 0 && (
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mt={10}>
            VAMOS COMEÇAR?
          </Heading>
          <Box mt={10}>
            <Input name="name" label="Nome" />
          </Box>
          <Box mt={10}>
            <Input name="sobrenome" label="Sobrenome" />
          </Box>
          <Box mt={10}>
            <Input name="email" label="Email" />
          </Box>
          <Box mt={10}>
            <Input name="cpf" label="CPF" />
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
            <Input name="cep" label="CEP" />
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
            <Input name="rua" label="Rua" />
            <Input name="Bairro" label="Bairro" />
            <Input name="Complemento" label="Complemento" />
            <Input name="Numero" label="Numero" />
            <Input name="Cidade" label="Cidade" />
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

export default StepRegister;
