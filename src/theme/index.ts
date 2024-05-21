"use client";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { inputTheme } from "./foundations/input";
import * as foundations from "./foundations";
const theme = extendTheme(
  {
    ...foundations,
    components: {
      Button: {
        baseStyle: {
          h: "60px",
          borderRadius: "10px",
        },
        variants: {},
      },
      Input: inputTheme,
    },
    styles: {
      global: {
        "*": {
          userSelect: "none",
          boxSizing: "border-box",
        },
        body: {
          scrollBehavior: "smooth",
          minHeight: "100%",
        },
        html: {
          height: "100%",
        },
      },
    },

    config: {
      useSystemColorMode: false,
      initialColorMode: "dark",
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
