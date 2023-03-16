import { HeaderSecondary } from "@/components/HeaderSecondary";

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import register1 from "../../public/register1.png";
import Steps from "./Steps";

export default function RoteiroPage() {
  return (
    <>
      <HeaderSecondary />
      <Grid h="92vh" templateColumns="repeat(2, 1fr)">
        <GridItem h="100%" colSpan={1}>
          <Box p="10">
            <Steps />
          </Box>
        </GridItem>
        <GridItem
          bg="orange.300"
          h="100%"
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
