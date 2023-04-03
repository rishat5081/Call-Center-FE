import {
  Button,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import bannerImg from "../assets/images/Banner-Image.jpg";
import Header from "./Header";
import Image from "next/image";
import flow1 from "../assets/images/Flow-1.png";
import priceplan from "../assets/images/priceplan.png";
import omni from "../assets/images/omni.webp";
import creditcard from "../assets/images/creditcard.png";
import telephone from "../assets/images/telephone.png";
import outbound from "../assets/images/outbound.png";
import bpo from "../assets/images/bpo.png";
import boy from "../assets/images/boy.png";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Zoom  from "react-reveal/Zoom";
const Home = () => {
  const router = useRouter();
  return (
    <Stack className="container">
      <Stack
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        h={{ base: "40vh", md: "70vh", lg: "100vh" }}
      >
        <Stack top={"0"} zIndex={"100"} position={"absolute"}>
          <Header />
        </Stack>
        <Stack
          className="hero-section"
          pt={{ base: "12", md: "28", lg: "72" }}
          px={{ base: "4", md: "8", lg: "20" }}
        >
          <Fade bottom>
            <Heading
              fontWeight={"100"}
              fontSize={{ base: "xl", md: "4xl", lg: "7xl" }}
            >
              Let's Connect <br />
              Together.
            </Heading>

            <HStack
              justifyContent={"space-between"}
              pt={"10"}
              w={{ base: "80vw", md: "40vw", lg: "35vw" }}
            >
              <Button
                py={{ base: "2", md: "6", lg: "8" }}
                color={"#000000"}
                fontWeight={"300"}
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                _hover={{ bgColor: "#000000", color: "#ffffff" }}
                bgColor={"transparent"}
                border={"1px solid black !important"}
                boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
                w={"48%"}
                borderRadius={"full"}
                variant={"outline"}
              >
                Connect Now
              </Button>
              <Button
                color={"#000000"}
                fontWeight={"300"}
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                _hover={{ bgColor: "#000000", color: "#ffffff" }}
                bgColor={"transparent"}
                border={"1px solid black !important"}
                boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
                w={"48%"}
                py={{ base: "2", md: "6", lg: "8" }}
                borderRadius={"full"}
                variant={"outline"}
              >
                Pricing Calculator
              </Button>
            </HStack>
          </Fade>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "6", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          alignItems={{ base: "baseline", lg: "baseline" }}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
          px={{ base: "8", md: "40", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            Save 40%-70% <br />
            immediately
          </Heading>
          <Text
            color={"#777777"}
            lineHeight={"2"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Save money… lot’s of money
          </Text>
          <Stack py={{ base: "4", md: "6", lg: "10" }}>
            <UnorderedList
              lineHeight={"1.75"}
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight={"100 !important"}
            >
              <ListItem>Save 40%-70% by Outsourcing.</ListItem>
              <ListItem>Hire the skills you need. Fast.</ListItem>
              <ListItem>Lower hiring risks, lower financial risks.</ListItem>
            </UnorderedList>
          </Stack>
          <Button
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "50%", md: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
            onClick={() => router.push("/")}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            <Image w={"100%"} src={flow1} />
          </Stack>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="right-section"
        >
          <Zoom>
            <Image src={priceplan} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "10", lg: "32" }}
        direction={{ base: "column", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={omni} layout={"responsive"} />
          </Zoom>
        </Stack>
        <Stack
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          alignItems={{ base: "baseline", lg: "baseline" }}
          px={{ base: "8", md: "40", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            OMNI-CHANNEL
          </Heading>
          <Heading
            py={"4"}
            fontWeight={"300"}
            color={"#777777"}
            lineHeight={"2"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            OMNI-CHANNEL CUSTOMER EXPERIENCE WHEREVER YOU ARE.
          </Heading>

          <Button
            onClick={() => router.push("/OmniChannel")}
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "50%", md: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            <Image w={"100%"} src={flow1} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "6", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          alignItems={{ base: "baseline", lg: "baseline" }}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
          px={{ base: "8", md: "40", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            PCI-DSS
          </Heading>
          <Heading
            py={"4"}
            fontWeight={"300"}
            color={"#777777"}
            lineHeight={"2"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            PCI SECURITY ON EVERY TRANSACTION.
          </Heading>

          <Button
            onClick={() => router.push("/PciDss")}
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "50%", md: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            
            <Image w={"100%"} src={flow1} />
            
          </Stack>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="right-section"
        >
          <Zoom>
            <Image src={creditcard} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "10", lg: "32" }}
        direction={{ base: "column", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={telephone} layout={"responsive"} />
          </Zoom>
        </Stack>
        <Stack
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          alignItems={{ base: "baseline", lg: "baseline" }}
          px={{ base: "8", md: "40", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            INBOUND
          </Heading>
          <Heading
            py={"4"}
            fontWeight={"300"}
            color={"#777777"}
            lineHeight={"2"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            WE LISTEN. WE DELIVER.
          </Heading>

          <Button
            onClick={() => router.push("/Inbound")}
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "50%", md: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            <Image w={"100%"} src={flow1} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "6", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          alignItems={{ base: "baseline", lg: "baseline" }}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
          px={{ base: "8", md: "40", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            OUTBOUND
          </Heading>
          <Heading
            py={"4"}
            fontWeight={"300"}
            color={"#777777"}
            lineHeight={"2"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            TURN LEADS INTO SALES.
          </Heading>

          <Button
            onClick={() => router.push("/Outbound")}
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "50%", md: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            <Image w={"100%"} src={flow1} />
          </Stack>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="right-section"
        >
          <Zoom>
            <Image src={outbound} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
      <Stack
        alignItems={"end"}
        direction={{ base: "column", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="inbound"
      >
        
        <Stack
          pl={{ base: "8" }}
          h={{ base: "40vh", md: "70vh" }}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          style={{
            backgroundImage: `url(${bpo.src})`,
            width: "100%",
            // height: "90vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >

        </Stack>
       
        <Stack
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          alignItems={{ base: "center", lg: "baseline" }}
          px={{ base: "8", md: "8", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            BPO / KPO
          </Heading>
          <Heading
            py={"4"}
            fontWeight={"300"}
            color={"#777777"}
            lineHeight={"2"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            BPO REDEFINED.
          </Heading>

          <Button
            onClick={() => router.push("/Bpo")}
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "35%", md: "20%", lg: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            
            <Image w={"100%"} src={flow1} />
           
          </Stack>
        </Stack>
      </Stack>
      <Stack
        py={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "6", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          alignItems={{ base: "baseline", lg: "baseline" }}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
          px={{ base: "8", md: "40", lg: "0" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            WHY TOUCHSTONE?
          </Heading>
          <Text
            pt={"4"}
            lineHeight={"1.8"}
            fontSize={{ base: "lg", md: "2xl" }}
          >
            Here are some highlights of why our 100+ clients are happy and
            satisfied and why you should choose us:
          </Text>
          <Stack py={{ base: "4", md: "6", lg: "10" }}>
            <UnorderedList
              lineHeight={"1.75"}
              fontSize={{ base: "md", md: "2xl" }}
              fontWeight={"100 !important"}
            >
              <ListItem>Cut Expenses from 40% to 70%.</ListItem>
              <ListItem>
                Improve Service Levels with our Omni-Channel Customer
                Experience.
              </ListItem>
              <ListItem>
                Secure and Smooth Transactions with our PCI-DSS Compliant
                Services.
              </ListItem>
              <ListItem>
                Rapid Scalability of your Business – Upgrade to 24/7 Customer
                Service..
              </ListItem>
              <ListItem>
                ISO 9001 Certified Contact Center Solutions to Boost your
                Business Progress.
              </ListItem>
            </UnorderedList>
          </Stack>
          <Button
            onClick={() => router.push("/PricingCalculator")}
            py={"6"}
            color={"#000000"}
            fontWeight={"400"}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "#000000", color: "#ffffff" }}
            bgColor={"transparent"}
            border={"1px solid black !important"}
            boxShadow={"0px 8px 30px rgb(0 0 0 / 15%) !important"}
            w={{ base: "50%", md: "35%" }}
            borderRadius={"full"}
            variant={"outline"}
          >
            Read More
          </Button>
          <Stack py={"6"}>
            <Image w={"100%"} src={flow1} />
          </Stack>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="right-section"
        >
          <Zoom>
            <Image src={boy} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
