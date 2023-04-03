import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhoWeAreComp from '../components/WhoWeAreComp'
const WhoWeAre = () => {
  return (
    <ChakraProvider>
        <Header/>
        <WhoWeAreComp/>
        <Footer/>
    </ChakraProvider>

  )
}

export default WhoWeAre