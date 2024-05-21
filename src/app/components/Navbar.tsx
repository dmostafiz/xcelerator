import React from "react";
import {
  Flex,
  HStack,
  Stack,
  Container,
  Img,
  Link as ChakraLink,
  Icon,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

interface Link {
  ICON: string;
  LINK: string;
}

interface Navigation {
  LOGO: string;
  LINKS: Link[];
}

interface NavbarProps {
  navigation: Navigation;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  return (
    <Stack bg="black" boxShadow="xl" pos="sticky" zIndex="100" top="0">
      <Container maxW="1545px" px="0" w="full">
        <HStack
          p="5"
          h={{
            md: "150px",
          }}
          justify={{ md: "space-between" }}
          flexDir={{
            base: "column",
            md: "row",
          }}
          alignItems={{
            base: "center",
            md: "start",
          }}
        >
          <Box>
            <Image
              src="/icons/nav-logo.svg"
              height={91}
              width={93}
              alt="Logo"
            />
          </Box>

          <Flex p="4">
            {navigation.LINKS.map((link, index) => (
              <HStack
                key={index}
                height="53px"
                width="53px"
                borderRadius="full"
                border="1px solid"
                borderColor="yellow.100"
                alignItems="center"
                justifyContent="center"
                mx="4"
              >
                <Link href={link.LINK}>
                  <Image
                    src={link.ICON}
                    alt={`Link ${index + 1}`}
                    height={30}
                    width={30}
                  />
                </Link>
              </HStack>
            ))}
          </Flex>
        </HStack>
      </Container>
    </Stack>
  );
};

export default Navbar;
