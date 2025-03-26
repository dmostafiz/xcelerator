import { Box, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { HOME } from "../constant";

export function MetalSection(props) {
  const { } = props;

  return (
    <Box
      bg={'black'}
      bgImage={{
        base: 'none',
        md: "url('/img/metal-bg-img.png')"
      }}
      minH={{
        base: "750px",
        md: "841px",
      }}
      w="full"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="1300px" h="full">
        <VStack gap="8" maxW="572px" alignItems="flex-start" py={112} >
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
          <Text textStyle="heading" color="white" >
            {HOME.METALS.TITLE}
          </Text>

          <Text textStyle="text2" color="yellow.200" >
            {HOME.METALS.METAL_DESCRIPTION}
          </Text>
          {/* <Text textStyle="text2" color="white">
            {HOME.METALS.SUB_DESCRIPTION}
          </Text> */}

          <Box>
            {HOME.METALS.ITEMS.map((item, index) => (
              <Flex mb={{ base: 2, lg: 0 }} gap={2.5} justify={'left'} alignItems={'baseline'} key={index}>
                <Image
                  src="/icons/checkbox.svg"
                  height={23}
                  width={23}
                  alt="icon"
                />
                <Text lineHeight={{ base: 8, lg: 10 }} fontSize={{base: '17px', md: '20px'}} textStyle="text2" color="yellow.500">
                  {item}
                </Text>
              </Flex>
            ))}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
