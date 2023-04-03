import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import inboundheader from "../assets/images/inboundheader.png";
import travel from "../assets/images/travel.png";
import insidesales from "../assets/images/insidesales.jpg";
import delivery from "../assets/images/delivery.png";
import resolution from "../assets/images/resolution.png";
import appointment from "../assets/images/appointment.png";
import ReadMoreReadLess from "./ReadMoreReadLess";
import { Zoom, Fade } from "react-reveal";
const InboundComp = () => {
  return (
    <Stack>
      <Stack
        px={{ base: "4", md: "8", lg: "24" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        bgColor={"#FCFCFC"}
        justifyContent={"space-between"}
        className="pci-dss"
        alignItems={"start"}
      >
        <Stack
          alignSelf={"end"}
          textAlign={"center"}
          alignItems={{ base: "center", lg: "normal" }}
          direction={{ base: "column", lg: "column" }}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
        >
          <Fade bottom>
            <Heading fontWeight={"100"} fontSize={{ base: "3xl", xl: "6xl" }}>
              Inbound Call Center Services.
            </Heading>
            <Heading
              py={{ base: "2", md: "4", lg: "8" }}
              fontSize={{ base: "3xl", xl: "5xl" }}
              fontWeight={"200"}
            >
              We Listen. We Deliver.
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
              backgroundImage: `url(${inboundheader.src})`,
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack p={{ base: "8", md: "12", lg: "20" }} w={"100%"}>
        <Text lineHeight={"1.8"} fontSize={{ base: "md", md: "lg" }}>
          Touchstone’s inbound call center services are the foundation of
          inbound customer service. While Omni-Channel is a fundamental
          requirement today, 67% of customers still prefer to talk with a
          company by phone. Touchstone provides accent-neutral associates
          trained to provide exceptional customer experiences. Our agents are
          trained in active listening skills, problem resolution, and how to
          deliver five-star customer care.
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
              Travel Reservation
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              The hospitality industry has been overwhelmed by the COVID
              pandemic. Prior to the pandemic, about 5% of travel reservations
              were canceled or changed. For the past two years, 50-100% of
              travel reservations have been canceled or changed.
            </Text>
          </Fade>
        </Stack>
        <Stack w={{ base: "100%", lg: "50%" }} className="right-section">
          <Zoom>
            <Image src={travel} layout={"responsive"} />
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
            <Image src={insidesales} layout={"responsive"} />
          </Zoom>
        </Stack>
        <Stack
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
            Inside Sales
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Generating sales revenue is at the heart of inbound call center
            outsourcing. Quick answer times, providing product information and
            pricing, securely taking payment and scheduling shipment are
            critical tasks for companies offering inbound call services.
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
            Food Delivery
          </Heading>
          <Text py={"4"} fontWeight={"300"} lineHeight={"1.7"}>
            Food delivery has revolutionized the restaurant industry. Inbound
            call center services have become a “must-have” part of the industry.
          </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={delivery} layout={"responsive"} />
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
            <Image src={resolution} layout={"responsive"} />
          </Zoom>
        </Stack>
        <Stack
          alignSelf={"center"}
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
            Problem Resolution
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            It is cheaper to retain a customer than it is to replace them. For
            companies that means providing a reliable means of resolving
            customer problems.
          </Text>
          </Fade>
        </Stack>
      </Stack>
      <Stack
        py={{ base: "12", lg: "28" }}
        px={{ base: "4", md: "10", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="money"
      >
        <Stack
          alignSelf={"center"}
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
            <Image src={appointment} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InboundComp;
