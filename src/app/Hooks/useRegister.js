import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useToast } from '@chakra-ui/react'
import Axios from '../Helpers/Axios'

export default function useRegister() {

    const toast = useToast()


    // const [firstName, setFirstName] = useState()
    // const [lastName, setLastName] = useState()
    // const [email, setEmail] = useState()
    // const [phoneNumber, setPhoneNumber] = useState()

    const handleSubmit = async (onOpen, { firstName, lastName, email, country }) => {


        if (!firstName || !lastName || !email || !country) {
            return toast({
                title: 'All fields are required!',
                description: "",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

        // return console.log('Values', { firstName, lastName, email, number })
        const sponsor = Cookies.get('sponsor')

        if (!sponsor) {

            toast({
                title: 'Please verify your sponsor!',
                description: "",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

            return onOpen()
        }



        const res = await Axios.post('/contact', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: '',
            sponsorId: sponsor,
            country,
            contactHost: 'go20x'
        })

        if (res?.data?.ok) {
            Cookies.remove('sponsor')
            
            return window.location.href = `https://shopxcelerate.com/auth/create_credential?token=${res?.data?.token}&email=${res?.data?.email}&uid=${res?.data?.user_id}`


        } else {
            toast({
                title: 'Oopss!',
                description: res?.data?.msg,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    }

    return {
        handleSubmit
    }
}
