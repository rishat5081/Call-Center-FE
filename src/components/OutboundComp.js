import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import outboundheader from "../assets/images/outboundheader.png";
import leadgeneration from "../assets/images/leadgeneration.png";
import solar from "../assets/images/solar.png";
import warranty from "../assets/images/warranty.png";
import live from "../assets/images/live.png";
import appointment from "../assets/images/appointment.png";
import security from "../assets/images/security.png";
import ReadMoreReadLess from "./ReadMoreReadLess";
import { Zoom, Fade } from "react-reveal";
const OutboundComp = () => {
  return (
    <Stack>
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="inbound"
        alignItems={"center"}
        bgColor={"#FCFCFC"}
      >
        <Stack
          pl={{ base: "4", md: "12", lg: "24" }}
          pt={{ base: "6", lg: "0" }}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
        >
          <Fade bottom>
          
          <Heading
            fontWeight={"100"}
            fontSize={{ base: "3xl", lg: "5xl", xl: "7xl" }}
          >
            Turn Leads into Sales
          </Heading>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="right-section"
        >
          <Stack
            h={{ base: "25vh", md: "60vh", xl: "70vh" }}
            style={{
              backgroundImage: `url(${outboundheader.src})`,
              width: "100%",

              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack p={{ base: "8", md: "12", lg: "20" }} w={"100%"}>
        <Text lineHeight={"1.8"} fontSize={{ base: "md", md: "lg" }}>
          Touchstone’s lead generation is a technique that builds visibility,
          credibility, acceptance for your brand in the mind of consumers.
          LeadGen focuses on identifying qualified prospects that are ready to
          move forward.
        </Text>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "6", md: "8", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="outbound"
      >
        <Stack
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          >
            Lead Generation
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone’s lead generation is a technique that builds visibility,
            credibility, acceptance for your brand in the mind of consumers.
            LeadGen focuses on identifying qualified prospects that are ready to
            move forward..
          </Text>
          </Fade>
        </Stack>
        <Stack w={{ base: "100%", lg: "50%" }} className="right-section">
          <Zoom>
          <Image src={leadgeneration} layout={"responsive"} />
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
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={live} layout={"responsive"} />
          </Zoom>
        </Stack>
        <Stack
        alignSelf={'end'}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          pt={{ base: "8", lg: "0" }}
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          >
            Mortgage Live Transfer
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone was founded by mortgage professionals who had built a $32
            billion mortgage portfolio. For our first few years, Touchstone
            worked exclusively in the mortgage industry.
          </Text>
          </Fade>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "10", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
        alignSelf={'end'}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          >
            Solar Live Transfer
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone was founded by mortgage professionals who had built a $32
            billion mortgage portfolio. For our first few years, Touchstone
            worked exclusively in the mortgage industry.
          </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={solar} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>

      <Stack
        pt={{ base: "12", lg: "4" }}
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
            <Image src={warranty} layout={"responsive"} />
          </Zoom>
        </Stack>
        <Stack
          alignSelf={"end"}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          pt={{ base: "8", lg: "0" }}
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          >
            Auto-Warranty
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone was founded by mortgage professionals who had built a $32
            billion mortgage portfolio. For our first few years, Touchstone
            worked exclusively in the mortgage industry.
          </Text>
          </Fade>
        </Stack>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "24" }}
        px={{ base: "4", md: "10", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
        alignSelf={'center'}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          >
            Appointment Setting
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Nothing converts higher than face-to-face appointments. Touchstone
            has developed skills to set appointments for product presentations
            for many industries, including vacation time sharing programs and
            in-home solar sales appointments:
          </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={appointment} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
      <Stack
        pb={{ base: "12", lg: "28" }}
        pt={{ base: "12", lg: "8" }}
        px={{ base: "4", md: "10", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
          h={{ base: "15vh", md: "30vh", xl: "50vh" }}
          style={{
            backgroundImage: `url(${security.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Stack>
        <Stack
          alignSelf={"end"}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
          <Heading
            textTransform={"uppercase"}
            fontWeight={"light"}
            fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
          >
            Appointments / Reservations
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone was founded by mortgage professionals who had built a $32
            billion mortgage portfolio. For our first few years, Touchstone
            worked exclusively in the mortgage industry.
          </Text>
          </Fade>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OutboundComp;
