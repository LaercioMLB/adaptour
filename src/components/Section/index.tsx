import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import section1 from "../../public/section1.png";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

export default function Section() {
  return (
    <Box>
      <Section1 />
      <Section2 />
      <Section3 />
    </Box>
  );
}
