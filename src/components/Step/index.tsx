import { useState } from "react";
import {
  Stack,
  Button,
  Divider,
  IconButton,
  VStack,
  Box,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface StepperProps {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
  stepNumber: number;
}

function Stepper({ stepOne, stepTwo, stepThree, stepNumber }: StepperProps) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      align="center"
      sx={{ whiteSpace: "nowrap" }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        align="center"
        sx={{ width: "100%" }}
      >
        {stepNumber >= 1 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "60px",
              marginTop: "20px",
              fontSize: "40px",
              bgColor: "#F7941D30",
              color: "white",
            }}
          >
            <CheckIcon color="orange.500" />
          </Box>
        ) : (
          <VStack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
                borderRadius: "60px",
                marginTop: "20px",
                fontSize: "40px",
                bgColor: "orange.500",
                color: "white",
              }}
            >
              1
            </Box>
          </VStack>
        )}
        <Box>{stepOne}</Box>
      </Stack>
      <Divider borderColor="gray.300" />
      <Stack
        direction="column"
        justifyContent="center"
        align="center"
        sx={{ width: "100%" }}
      >
        {stepNumber >= 2 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "60px",
              marginTop: "20px",
              fontSize: "40px",
              bgColor: "#F7941D30",
              color: "white",
            }}
          >
            <CheckIcon color="orange.500" />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "60px",
              border: stepNumber === 1 ? "" : "1px solid #9699b0",
              marginTop: "20px",
              fontSize: "40px",
              bgColor: stepNumber === 1 ? "orange.500" : "",
              color: stepNumber === 1 ? "white" : "gray.300",
            }}
          >
            2
          </Box>
        )}
        <Box>{stepTwo}</Box>
      </Stack>
      <Divider borderColor="gray.300" />
      <Stack
        direction="column"
        justifyContent="center"
        align="center"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "60px",
            border: stepNumber === 3 ? "" : "1px solid #9699b0",
            marginTop: "20px",
            fontSize: "40px",
            bgColor: stepNumber === 3 ? "orange.500" : "",
            color: stepNumber === 3 ? "white" : "gray.300",
          }}
        >
          3
        </Box>
        <Box>{stepThree}</Box>
      </Stack>
    </Stack>
  );
}

export default Stepper;
