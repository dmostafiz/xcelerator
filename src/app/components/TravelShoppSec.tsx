import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { HOME } from "../constant";
import Image from "next/image";
export interface TravelShoppSecProps {}

export function TravelShoppSec(props: TravelShoppSecProps) {
  const {} = props;
  const travelItems = HOME.TRAVEL.ITEMS;

  return (
    <>
      <Box
        bgImage="url('/img/beauty-girl-bg.png')"
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
          <HStack
            py={112}
            gap={{
              base: "20",
              md: "20",
            }}
            alignItems="end"
          >
            <VStack alignItems="flex-start" gap="8" maxW={672} w="full">
              <Flex
                bg="yellow.200"
                color="black.300"
                maxW={{
                  base: "full",
                  md: "481px",
                }}
                w="full"
                minH="52px"
                h="full"
                justifyContent="center"
                alignItems="center"
                textStyle="text-bg"
                textTransform="uppercase"
              >
                {HOME.TRAVEL.TRAVEL_TEXT}
              </Flex>
              <Text textStyle="heading" color="white">
                {HOME.TRAVEL.TRAVEL_TITLE}
              </Text>
              <Box>
                {travelItems.map((item, index) => (
                  <HStack key={index}>
                    <Image
                      src="/icons/checkbox.svg"
                      height={23}
                      width={23}
                      alt="icon"
                    />
                    <Text textStyle="text3" color="yellow.200">
                      {item.TEXT}
                    </Text>
                  </HStack>
                ))}
              </Box>

              <Text textStyle="heading2" color="white" maxW={638}>
                {HOME.TRAVEL.TRAVEL_DESCRIPTION}
              </Text>
            </VStack>
            <Box display={{ base: "none", md: "block" }}>
              <Image
                height={560}
                width={350}
                src="/img/phone.png"
                alt=" Product"
              />
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
