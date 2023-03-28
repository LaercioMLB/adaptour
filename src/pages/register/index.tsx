import { HeaderSecondary } from "@/components/HeaderSecondary";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import register1 from "../../public/register1.png";
import StepsRegister from "./StepsRegister";

export default function Register() {
  return (
    <>
      <HeaderSecondary />
      <Grid
        sx={{ paddingTop: "8vh" }}
        h="92vh"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem h="100%" colSpan={1}>
          <Box p="10">
            <StepsRegister />
          </Box>
        </GridItem>
        <GridItem
          position="fixed"
          right={0}
          bg="orange.300"
          h="92vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          colSpan={1}
        >
          <Box maxW="50%" textAlign="center">
            <Image src={register1} alt="Minha Imagem" />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
