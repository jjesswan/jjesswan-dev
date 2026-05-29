import { extendTheme, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import '@fontsource/martel';
import '@fontsource/martel/700.css';



const colors = {
  red: "#FFADAE",
  blue: "#529bd6",
  grey: "#201f1f",
  light: "#535353",
  lightyellow: "#cd771b",
  white: "#090909",
};

const fonts = {
  heading: `"Martel", serif;`,
  body: `"Inconsolata Variable", monospace;`,
  subtitle: `"Inconsolata Variable", monospace;`,
};

const components = {
  Button: {
    variants: {
      solid: () => ({
        fontSize: ".7rem",
        textTransform: "uppercase",
        fontWeight: "700",
        borderRadius: ".2rem",
        letterSpacing: ".02rem",
        color: "black",
        transition: "all .4s",
        height: "1.8rem",
        _hover: {
          background: "transparent",
          border: "white solid 1px",
        },
      }),
      outline: () => ({
        fontSize: ".7rem",
        textTransform: "uppercase",
        fontWeight: "700",
        borderRadius: "1rem",
        letterSpacing: ".02rem",
        border: "#545454 solid 1px",
        transition: "all .4s",
        background: "transparent",
        height: "1.8rem",
        _hover: {
          background: "transparent",
          border: "black solid 1px",
        },
      }),
      outlineSmall: () => ({
        fontSize: ".5rem",
        textTransform: "uppercase",
        fontWeight: "700",
        borderRadius: "1rem",
        letterSpacing: ".02rem",
        border: "#545454 solid 1px",
        transition: "all .4s",
        background: "transparent",
        height: "1.5rem",
        _hover: {
          background: "transparent",
          border: "black solid 1px",
        },
      }),
    },
  },

  Divider: {
    variants: {
      thick: () => ({
        borderWidth: ".6rem", // change the width of the border
        borderStyle: "solid", // change the style of the border
        borderRadius: 10,
      }),
    },
  },

  Link: {
    variants: {
      navLink: () => ({
        fontFamily: fonts.heading,
        fontSize: ".6rem",
        letterSpacing: ".02rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: "black",
        _hover: {
          color: "blue",
          textDecoration: "none",
          transition: "all 0.4s",
        },
      }),
    },
  },
  Text: {
    variants: {
      bigType: () => ({
        fontFamily: fonts.subtitle,
        fontSize: "1rem",
        color: "black",
      }),
      type: () => ({
        fontFamily: fonts.subtitle,
        fontSize: ".7rem",
        color: "black",
      }),
      smallType: () => ({
        fontFamily: fonts.subtitle,
        fontSize: ".6rem",
        color: "black",
      }),
      // HEADER
      h1: () => ({
        fontFamily: fonts.heading,
        letterSpacing: "-1rem",
        fontWeight: "500",
        fontSize: "10rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textTransform: "lowercase"
      }),
      h2: () => ({
         fontFamily: fonts.heading,
        letterSpacing: "-.3rem",
        fontWeight: "500",
        fontSize: "3rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textTransform: "lowercase"
      }),
      h3: () => ({
         fontFamily: fonts.heading,
        letterSpacing: "-.2rem",
        fontWeight: "500",
        fontSize: "3rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textTransform: "lowercase"
      }),
      h4: () => ({
        fontFamily: fonts.heading,
        fontSize: "1.6rem",
        letterSpacing: "-.02rem",
        color: "white",
        fontWeight: "800",
        textTransform: "lowercase",
      }),
    },
  },
};

const customTheme = {
  //config,
  colors,
  fonts,
  components,
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "black",
        zIndex: -1,
      },
    },
  },
};

export default extendTheme(customTheme);

