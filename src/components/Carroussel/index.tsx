import { Box, Image, Heading } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const items = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    title: "Restaurantes",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Hotéis",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1638679700885-f11bbc0ff2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Pontos turísticos",
  },
];

export default function CarouselComponent() {
  return (
    <Box position="relative">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {items.map((item) => (
          <Box key={item.id}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              top="50%"
              left="50%"
              textAlign="center"
              minW="100%"
              h="500px"
              backgroundImage={`url(${item.image})`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
            >
              <Heading as="h1" brightness={"50%"} color="orange.700" size="3xl">
                {item.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
