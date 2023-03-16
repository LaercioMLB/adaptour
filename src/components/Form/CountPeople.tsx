import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

interface CountPeopleProps {
  title: string;
  subtitle: string;
}

export default function CountPeople({ title, subtitle }: CountPeopleProps) {
  const [number, setNumber] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #000000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box textAlign="left" fontWeight={500}>
          {title}
        </Box>
        <Box textAlign="left" fontSize={"14px"} mb="10px" color="#00000030">
          {subtitle}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            cursor: "pointer",
            fontWeight: 700,
            width: "25px",
            height: "25px",
            borderRadius: "25px",
            border: "1px solid #000",
          }}
          onClick={() => number !== 0 && setNumber(number - 1)}
        >
          +
        </Box>
        <Box sx={{ marginX: "10px" }}>{number}</Box>
        <Box
          onClick={() => setNumber(number + 1)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            cursor: "pointer",
            fontWeight: 700,
            width: "25px",
            height: "25px",
            borderRadius: "25px",
            border: "1px solid #000",
          }}
        >
          +
        </Box>
      </Box>
    </Box>
  );
}
