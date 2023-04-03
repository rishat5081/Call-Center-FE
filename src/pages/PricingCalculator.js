import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pricing from '../components/Pricing'

const PricingCalculator = () => {
  return (
    <ChakraProvider>
        <Header/>
        <Pricing/>
        <Footer/>
    </ChakraProvider>

  )
}

export default PricingCalculator