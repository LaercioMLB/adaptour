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
import InputText from "@/components/Form/InputText";
import Stepper from "@/components/Step";
import OkCancelButton from "@/components/OkCancelButton";

function StepsRegister() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Stack spacing={6}>
        <Stepper
          stepNumber={activeStep}
          stepOne="Insira seus dados"
          stepTwo="Sua localização"
          stepThree="Sobre você"
        />
        {activeStep === 0 && (
          <Box>
            <Heading as="h1" sx={{ fontSize: "40px" }} mt={10} mb={20}>
              VAMOS COMEÇAR?
            </Heading>
            <InputText label="Nome" placeholder="Digite seu nome" />
            <InputText label="Sobrenome" placeholder="Digite seu sobrenome" />
            <InputText label="Email" placeholder="Digite seu email" />
            <InputText label="CPF" placeholder="Digite seu cpf" />
          </Box>
        )}

        {activeStep === 1 && (
          <Box>
            <Heading as="h1" sx={{ fontSize: "40px" }} mt={10}>
              SÓ MAIS UM POUQUINHO...
            </Heading>
            <SimpleGrid columns={2} spacing={4}>
              <InputText label="CEP" placeholder="Digite seu CEP" />
              <Box mt={8}>
                <Box textAlign="left" fontWeight={500}>
                  Estado
                </Box>
                <Select
                  placeholder="Selecione uma opção"
                  focusBorderColor="orange.500"
                  variant="flushed"
                >
                  <option value="option1">Paraná</option>
                  <option value="option2">São Paulo</option>
                  <option value="option3">Brasília</option>
                </Select>
              </Box>
            </SimpleGrid>
            <InputText label="Rua" placeholder="Digite sua rua" />
            <InputText label="Bairro" placeholder="Digite seu bairro" />
            <InputText
              label="Complemento"
              placeholder="Digite seu complemento"
            />
            <InputText label="Numero" placeholder="Digite seu numero" />
            <InputText label="Cidade" placeholder="Digite sua cidade" />
          </Box>
        )}

        {activeStep === 2 && (
          <Box>
            <Heading as="h1" sx={{ fontSize: "40px" }} mt={10}>
              QUERO TE CONHECER{" "}
              <Text as="span" color="orange.500">
                :)
              </Text>
            </Heading>
            <Heading as="h1" sx={{ fontSize: "25px" }} mt={4}>
              Me fale mais sobre você
            </Heading>
            <Text sx={{ fontSize: "18px", fontWeight: 500 }} mt={10}>
              Por favor, nos informe sobre quaisquer necessidades ou limitações
              que possam impactar a sua interação com a cidade
            </Text>
            <SimpleGrid columns={1} spacing={4} mt={10}>
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
              <Text
                sx={{ fontSize: "18px", fontWeight: 500 }}
                mt={5}
                textAlign="left"
              >
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
              <Text
                sx={{ fontSize: "18px", fontWeight: 500 }}
                mt={5}
                textAlign="left"
              >
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
          </Box>
        )}
      </Stack>
      <OkCancelButton
        cancelLabel={activeStep === 0 ? "Cancelar" : "Voltar"}
        okLabel={activeStep === 2 ? "Finalizar" : "Próximo"}
        okSubmit={() => setActiveStep(activeStep + 1)}
        cancelSubmit={() => setActiveStep(activeStep - 1)}
      />
    </>
  );
}

export default StepsRegister;
