import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import InboundComp from '../components/InboundComp'
import Footer from '../components/Footer'
const Inbound = () => {
  return (
    <ChakraProvider>
        <Header/>
        <InboundComp/>
        <Footer/>
    </ChakraProvider>
  )
}

export default Inbound