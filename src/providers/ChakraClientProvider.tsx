"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export interface ChakraClientProviderProps {
  children: React.ReactNode;
}

export function ChakraClientProvider(props: ChakraClientProviderProps) {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
