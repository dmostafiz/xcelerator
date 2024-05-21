import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { HOME } from "../constant";

export interface MetalSectionProps {}

export function MetalSection(props: MetalSectionProps) {
  const {} = props;

  return (
    <Box
      bgImage="url('/img/metal-bg-img.png')"
      minH={{
        base: "750px",
        md: "841px",
      }}
      w="full"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="1520px" h="full">
        <VStack gap="8" maxW="572px" alignItems="flex-start" py={112}>
          <Flex
            bg="yellow.200"
            color="black.300"
            maxW={{
              base: "full",
              md: "417px",
            }}
            minH="52px"
            h="full"
            w="full"
            justifyContent="center"
            alignItems="center"
            textStyle="text-bg"
            textTransform="uppercase"
          >
            {HOME.METALS.METAL_TEXT}
          </Flex>
          <Text textStyle="heading" color="white">
            {HOME.METALS.TITLE}
          </Text>

          <Text textStyle="text2" color="yellow.200">
            {HOME.METALS.METAL_DESCRIPTION}
          </Text>
          <Text textStyle="text2" color="white">
            {HOME.METALS.SUB_DESCRIPTION}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
