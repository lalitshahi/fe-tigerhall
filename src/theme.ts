import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#FF5900",
    success: "#04B100",
    error: "#BE0505",
  },
  grey: {
    50: "#FAF9F7",
    200: "#F5F3EE",
    700: "#797670",
    800: "#4D4B46",
    900: "#383733",
  },
  gray: {
    800: "#001315",
  },
  tigerOrange: {
    200: "#FF5900",
    400: "#FFA97A",
    500: "#FF5900",
    600: "#FF5900",
  },
  kindYellow: {
    600: "#FAAB36",
  },
  soSunny: {
    600: "#F78104",
  },
  teal: {
    600: "#005F60",
  },
  backgroundDark: "#001315",
  backgroundLight: "#FAF9F7",
  transparentBlack: "#000000B2",
};

const fonts = {
  body: "Bricolage Grotesque Variable, sans-serif",
  heading: "Bricolage Grotesque Variable, sans-serif",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({ config, colors, fonts });
