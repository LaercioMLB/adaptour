import { useState } from "react";
import { HeaderSecondary } from "@/components/HeaderSecondary";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import register1 from "../../public/register1.png";
import StepsRegister from "./StepsRegister";

export default function Register() {
  const [activeStep, setActiveStep] = useState(3);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <HeaderSecondary />
      <Grid h="92vh" templateColumns="repeat(2, 1fr)">
        <GridItem h="100%" colSpan={1}>
          <Box p="10">
            <StepsRegister />
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
