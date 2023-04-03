import { ChakraProvider, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";

const index = () => {
  return (
    <ChakraProvider>
      <Stack w={"100%"}>
        <Home />
        <Footer />
      </Stack>
    </ChakraProvider>
  );
};

export default index;
