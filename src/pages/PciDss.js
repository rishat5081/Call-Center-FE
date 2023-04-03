import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PciDssComp from '../components/PciDssComp'

const PciDss = () => {
  return (
    <ChakraProvider>
        <Header/>
        <PciDssComp/>
        <Footer/>
    </ChakraProvider>
  )
}

export default PciDss