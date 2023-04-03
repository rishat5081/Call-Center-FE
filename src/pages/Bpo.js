import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BpoComp from '../components/BpoComp'
const Bpo = () => {
  return (
      <ChakraProvider>
          <Header/>
          <BpoComp/>
          <Footer/>
      </ChakraProvider>
  )
}

export default Bpo