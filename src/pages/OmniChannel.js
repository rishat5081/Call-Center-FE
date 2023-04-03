import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Omni from "../components/Omni";
const OmniChannel = () => {
  return (
    <ChakraProvider>
      <Header />
      <Omni />
      <Footer/>
    </ChakraProvider>
  );
};

export default OmniChannel;
