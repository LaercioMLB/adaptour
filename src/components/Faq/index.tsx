import { SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

const items = [
  {
    title: "Como faço para criar uma conta?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  },
  {
    title: "Como faço para redefinir minha senha?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  },
  {
    title: "Qual é a política de privacidade da empresa?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  },
];

export default function Faq() {
  return (
    <Box bgColor="white">
      <Box w="100%" maxWidth={1480} mx="auto" p="6" alignItems="center">
        <Heading as="h2" size="lg" mt={4}>
          Perguntas frequentes
        </Heading>

        <InputGroup mt={4}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            name="search"
            bgColor="gray.50"
            focusBorderColor="orange.500"
            placeholder="Qual a sua duvida?"
          />
        </InputGroup>
        <Accordion allowToggle mt={4}>
          {items.map((item) => (
            <AccordionItem key={item.title}>
              <h2>
                <AccordionButton _expanded={{ color: "orange.500" }}>
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon color="orange.500" h={30} w={30} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <Box bgColor="gray.50">
        <Box w="100%" maxWidth={1480} mx="auto" p="6" alignItems="center">
          <Heading as="h2" size="lg" mt={4}>
            Ainda não encontrou o que procura?
          </Heading>
          <Text mt={10}>Podemos te ajudar pelo nosso canal de e-mail</Text>
          <Heading as="h2" size="lg" my={4} color="orange.500">
            contato@tourimsaccessblity.com
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}
