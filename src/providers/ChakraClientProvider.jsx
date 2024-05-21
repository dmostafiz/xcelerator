"use client";

import theme from "../theme";
import { ChakraProvider } from "@chakra-ui/react";


export function ChakraClientProvider(props) {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
