"use client"

import { Avatar, Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { ProductSection } from "./components/ProductSection";
import { MetalSection } from "./components/MetalSection";
import { Footer } from "./components/Footer";
import { TravelShoppSec } from "./components/TravelShoppSec";
import Navbar from "./components/Navbar";
import { HOME } from "./constant";
import Cookies from 'js-cookie'
import Axios from "./Helpers/Axios";
import { useEffect, useState } from "react";

export default function Home() {


  const sponsorModal = useDisclosure()


  const [sponsor, setSponsor] = useState(null)

  const [username, setUsername] = useState(null)
  const toast = useToast()

  useEffect(() => {
    const sponsorUsername = Cookies.get('sponsor')
    console.log('sponsorUsername', sponsorUsername)
    if (!sponsorUsername) {
      sponsorModal.onOpen()
    } else {

      console.log('sponsor', sponsor)
      if (!sponsor) {
        verifySponsor(sponsorUsername)
      }
    }
  })

  const handleVerify = async () => {
    if (!username) {
      return alert('Please enter a username')
    }

    await verifySponsor(username)

  }


  const verifySponsor = async (sponsorUsername) => {

    const res = await Axios.get(`/sponsor/validate/${sponsorUsername}`)

    if (!res?.data?.ok) {

      return toast({
        title: 'Sponsor verification failed',
        description: "",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

    }

    else {
      Cookies.set('sponsor', res?.data?.user?.username)

      setSponsor(res?.data?.user)

      toast({
        title: 'Sponsor verified',
        description: "",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      sponsorModal.onClose()
      // setTimeout(() => {
      //   window.location.href = `/`
      // }, 500)
    }
  }

  return (
    <Box>
      <Navbar navigation={HOME.NAVIGATION} />
      <Hero onOpen={sponsorModal.onOpen} />
      <TravelShoppSec />
      <ProductSection />
      <MetalSection />
      <Footer />



      <Modal isOpen={sponsorModal.isOpen} onClose={sponsorModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom={'1px'} borderColor='gray.300'>
            Who referred you?
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>

            <FormControl isRequired>
              <FormLabel>Sponsor username</FormLabel>
              <Input value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter sponsor id' />
            </FormControl>

          </ModalBody>

          <ModalFooter borderTop={'1px'} borderColor='gray.300' as={'sponsor'}>
            <Button onClick={handleVerify} colorScheme='blue'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {sponsor && <Box as='section' position={'fixed'} zIndex='9999' bottom='12px' left='12px' bg='white' shadow={'md'} px='3' py={1} rounded='full'>
        <Flex gap={2} alignItems='center'>
          <Avatar size='sm' src={sponsor?.avatar} />
          <Box lineHeight={1}>
            <Text mb={0} lineHeight={1} fontSize={'9px'} color='gray.500'>Referred by</Text>
            <Text as={'span'} fontSize={'14px'}>{sponsor.full_name}</Text>
          </Box>

        </Flex>
      </Box>}

    </Box>
  );
}
