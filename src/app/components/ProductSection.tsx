import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";
import Image from "next/image";
export interface ProductSectionProps {}

export function ProductSection(props: ProductSectionProps) {
  const {} = props;

  return (
    <Box
      bgImage="url('/img/product-bg.png')"
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
          w="full"
          justify="space-between"
          alignItems={{
            base: "center",
          }}
          flexDir={{
            base: "column-reverse",
            md: "row",
          }}
          textAlign={{
            base: "center",
            md: "start",
          }}
          gap={{
            base: "20",
            md: "20",
          }}
          py={112}
        >
          <Box flex={1}>
            <Image
              height={617}
              width={778}
              src={HOME.PRODUCTS.PRODUCT_IMG}
              alt=" Product"
            />
          </Box>
          <Stack flex={1} gap="8">
            <Flex
              bg="yellow.100"
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
              {HOME.PRODUCTS.PRODUCT_BTN_TEXT}
            </Flex>
            <Text textStyle="heading1" color="black.300">
              {HOME.PRODUCTS.TITLE}
            </Text>

            <Text color="black.300" textStyle="text2">
              {HOME.PRODUCTS.DESCRIPTION}
            </Text>

            <Box>
              <Button
                w="full"
                maxW={{
                  base: "full",
                  md: "192px",
                }}
                bg="black.300"
                color="white"
                fontWeight="normal"
                fontSize="16px"
                lineHeight="66px"
                minH="60px"
                h="full"
                borderRadius="10px"
              >
                LEARN MORE
              </Button>
            </Box>
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
}
