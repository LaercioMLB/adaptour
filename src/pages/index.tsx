import CarouselComponent from "@/components/Carroussel";
import Footer from "@/components/Footer";
import { Input } from "@/components/Form/input";
import { Header } from "@/components/Header";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Footer />
    </>
  );
}
