import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const {} = props;

  return (
    <>
      <Stack
        bg="yellow.200"
        as="footer"
        minH="75"
        alignItems="center"
        justify="center"
      >
        <Text
          color="black.300"
          p="4"
          textStyle="text1"
          maxW={{
            base: "260px",
            md: "1135px",
          }}
        >
          Xcelerate©2024
        </Text>
      </Stack>
    </>
  );
}
