import {
  Flex,
  Button,
  Stack,
  Link,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/Form/input";
import { Logo } from "@/components/Header/Logo";

export default function SignIn() {
  return (
    <Flex w="100wh" h="100vh" align="center" justify="center" color="gray.50">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Logo />
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
          <Link
            href="#"
            _hover={{
              color: "orange",
              transition: "0.2s",
              textDecoration: "underline",
            }}
            textAlign="end"
          >
            Esqueceu sua senha?
          </Link>
        </Stack>
        <Button mt="6" colorScheme="orange" size="lg">
          Entrar
        </Button>
        <Flex alignItems="center" gap={1} my={4}>
          <Divider />
          <Text>OU</Text>
          <Divider />
        </Flex>
        <Link
          href="/register"
          _hover={{
            color: "orange",
            transition: "0.2s",
            textDecoration: "underline",
          }}
          textAlign="center"
        >
          Criar sua conta
        </Link>
      </Flex>
    </Flex>
  );
}
