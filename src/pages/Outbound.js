import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OutboundComp from '../components/OutboundComp'

const Outbound = () => {
  return (
    <ChakraProvider>
        <Header/>
        <OutboundComp/>
        <Footer/>
    </ChakraProvider>

  )
}

export default Outbound