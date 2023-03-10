import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      900: "#181823",
      800: "#1F2029",
      700: "#353646",
      600: "#4B4B63",
      500: "#616486",
      400: "#797D9A",
      300: "#9699B0",
      200: "#B3B5C6",
      100: "#D1D2D0",
      50: "#EEEEF2",
    },
    black: "#000000",
    white: "#FFFFFF",
    orange: {
      700: "#F37520",
      500: "#F5841F",
      300: "#F7941D",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto,",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      },
    },
  },
});
