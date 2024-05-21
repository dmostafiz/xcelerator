"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { HOME } from "../constant";
import { Field, Form, Formik } from "formik";

export interface HeroProps {}

export function Hero(props: HeroProps) {
  const {} = props;

  return (
    <>
      <Box
        bgImage="url('/img/hero-bg-img.png')"
        minH={{
          base: "700px",
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
              base: "column",
              md: "row",
            }}
            textAlign={{
              base: "center",
              md: "start",
            }}
            gap={{
              base: "12",
              md: "20",
            }}
            py={{ base: "80px", md: "116px" }}
          >
            <Box maxW={713}>
              <Stack gap="0">
                <Text
                  color="yellow.200"
                  textStyle="text4"
                  textTransform="uppercase"
                >
                  {HOME.HERO.HEADING1}
                </Text>
                <Text textStyle="heading3" lineHeight="0.9">
                  {HOME.HERO.HEADING2}
                </Text>
              </Stack>
              <VStack mt="8" gap="0">
                <Text fontSize="30px" fontWeight="normal" color="white">
                  {HOME.HERO.VIDEO_TEXT1}
                </Text>
                <Text
                  color="yellow.200"
                  fontSize="68px"
                  fontWeight="bold"
                  lineHeight="1"
                >
                  {HOME.HERO.VIDEO_TITLE}
                </Text>
                <Box mt="12">
                  <Image
                    height={617}
                    width={778}
                    src="/img/hero-video.png"
                    alt="Product"
                  />
                </Box>
              </VStack>
              <Text textStyle="heading4" py="8" textAlign="center">
                {HOME.HERO.DESCRIPTION}
              </Text>
            </Box>
            <Box
              h="full"
              bg="white"
              p={{
                base: "6",
                xl: "50px",
              }}
              borderRadius="18px"
            >
              <VStack>
                <Text
                  fontSize={{ base: "24px", md: "38px" }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="yellow.200"
                  sx={{
                    span: {
                      color: "black.300",
                    },
                  }}
                >
                  {HOME.HERO.FORM.TITLE}
                </Text>

                <Text
                  color="black.300"
                  fontSize="22px"
                  py="2"
                  fontWeight="medium"
                >
                  {HOME.HERO.FORM.FORM_DESCRIPTION}
                </Text>
              </VStack>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  country: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <VStack spacing="6" mt="5">
                    <Field name="firstName">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel textStyle="form-label">
                            First Name
                          </FormLabel>
                          <Input
                            isRequired
                            placeholder="First Name"
                            {...field}
                            bg="gray.200"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="lastName">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel textStyle="form-label">
                            Last Name
                          </FormLabel>
                          <Input
                            isRequired
                            placeholder="Last Name"
                            {...field}
                            bg="gray.200"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel textStyle="form-label"> Email</FormLabel>
                          <Input
                            isRequired
                            placeholder="Email"
                            type="email"
                            {...field}
                            bg="gray.200"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="country">
                      {({ field }: any) => (
                        <FormControl>
                          <FormLabel textStyle="form-label"> Country</FormLabel>
                          <Select
                            isRequired
                            placeholder="Select Country"
                            {...field}
                            bg="gray.200"
                            textStyle="form-label"
                            color="black.300"
                            h="60px"
                          >
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Stack w="full">
                      <Text
                        textStyle="form-label"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        We will send your login credentials to email above
                      </Text>
                      <Button
                        bg="yellow.200"
                        textStyle="form-label"
                        textTransform="uppercase"
                        w="full"
                        type="submit"
                        h="60px"
                        color="white"
                      >
                        save my spot
                      </Button>
                    </Stack>
                  </VStack>
                </Form>
              </Formik>
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
