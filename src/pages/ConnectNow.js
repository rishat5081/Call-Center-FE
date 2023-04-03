import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Connect from '../components/Connect'
const ConnectNow = () => {
  return (
    <ChakraProvider>
        <Header/>
        <Connect/>
        <Footer/>
    </ChakraProvider>
  )
}

export default ConnectNow