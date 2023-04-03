import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import omni from "../assets/images/omni.webp";
import inboundOutbound from "../assets/images/inbound-outbound.png";
import sms from "../assets/images/sms.png";
import webchat from "../assets/images/webchat.png";
import autobot from "../assets/images/autobot.png";
import email from "../assets/images/email.png";
import ivr from "../assets/images/ivr.png";
import mobile from "../assets/images/mobile.png";
import crm from "../assets/images/crm.png";
import socialmedia from "../assets/images/socialmedia.png";
import eretail from "../assets/images/eretail.png";
import ReadMoreReadLess from "./ReadMoreReadLess";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Omni = () => {
  return (
    <Stack>
      <Stack
        px={{ base: "4", md: "8", lg: "24" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        bgColor={"#FCFCFC"}
        justifyContent={"space-between"}
        className="omni"
        alignItems={"center"}
      >
        <Stack
          textAlign={"center"}
          alignItems={{ base: "center", lg: "normal" }}
          direction={{ base: "column", lg: "column" }}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
        >
          <Fade bottom>
            <Heading
              fontWeight={"100"}
              fontSize={{ base: "3xl", lg: "3xl", xl: "7xl" }}
            >
              Omni-Channel Solutions
            </Heading>
            <Heading
              py={{ base: "2", md: "4", lg: "8" }}
              fontSize={{ base: "3xl", lg: "3xl", xl: "5xl" }}
              fontWeight={"200"}
            >
              Wherever You Are.
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
              backgroundImage: `url(${omni.src})`,
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack p={{ base: "8", md: "12", lg: "20" }} w={"100%"}>
        <ReadMoreReadLess>
          <Text lineHeight={"1.8"} fontSize={{ base: "md", md: "lg" }}>
            Touchstone Communications provides PCI Security on every
            transaction. As a PCI compliant call center, each transaction is a
            secure payment. The secure payment systems include technical
            firewalls and network security that guard sensitive data and provide
            PCI compliance for over the phone payments. The physical facility is
            protected by bio-entry requirements as well as SOPs that prohibit
            paper, writing instruments, phones, cameras, and storage devices on
            the floor where credit card data is viewable.
          </Text>
        </ReadMoreReadLess>
      </Stack>
      <Stack
        pt={{ base: "12", lg: "28" }}
        px={{ base: "6", md: "8", lg: "32" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        justifyContent={"space-between"}
        className="outbound"
      >
        <Stack w={{ base: "100%", lg: "50%" }} className="left-section">
          <Fade top>
            <Heading
              color={"#303133"}
              fontWeight={"400"}
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              Voice Inbound / Outbound
            </Heading>
            <Text
              py={"8"}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"400"}
            >
              1. Inbound Support
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} lineHeight={"1.8"}>
              Our inbound customer service is exceptional. It presents customers
              with a single human touch factor for all their frequently asked
              questions or concerns, with agents who are able to provide a high
              level of first call resolution.
            </Text>
            <Text
              py={"8"}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"400"}
            >
              2. Outbound Lead-Gen & Prospecting
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} lineHeight={"1.8"}>
              Our Lead Generation Outbound Customer service drives sales for our
              clients. Touchstone is a leader in live transfers and delivering
              qualified leads to the right person in our client’s organizations.
            </Text>
          </Fade>
        </Stack>
        <Stack w={{ base: "100%", lg: "50%" }} className="right-section">
          <Zoom>
            <Image src={inboundOutbound} layout={"responsive"} />
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
            <Image src={sms} layout={"responsive"} />
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
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              SMS/Text
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Touchstone Communications’ omni-channel contact center makes it
              possible to use SMS texting to increase reach and effectiveness.
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
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
            <Heading
              textTransform={"uppercase"}
              fontWeight={"light"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              Live Web Chat
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Touchstone’s omni-channel call center provides live chat for
              client websites. The “live” function can be available when IVR and
              an auto-bot chat function cannot satisfy the customer interacting
              with your website.
            </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={webchat} layout={"responsive"} />
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
            <Image src={autobot} layout={"responsive"} />
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
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              Autobot Takeover
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              If you’re already using bots for chats on your website, it makes
              sense to add the ability to migrate to a live chat when needed.
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
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
            <Heading
              textTransform={"uppercase"}
              fontWeight={"light"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              Email
            </Heading>

            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Our omni-channel contact centers integrate email capability into
              all agent desktops. Email is a preferred channel for contracts,
              opt-in notifications, and calendar events.
            </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={email} layout={"responsive"} />
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
            <Image src={ivr} layout={"responsive"} />
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
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              IVR
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Touchstone’s Interactive Voice Response (IVR) is an automated
              phone system technology that gateways inbound callers to access
              information completely.
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
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
            <Heading
              textTransform={"uppercase"}
              fontWeight={"light"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              Mobile
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Consumers now use their mobile devices more than their computers.
              Touchstone’s omni-channel BPO capability includes full integration
              with mobile networks.
            </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={mobile} layout={"responsive"} />
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
            <Image src={crm} layout={"responsive"} />
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
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              CRM Integration
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Touchstone’s omni-channel contact center platform integrates with
              leading Customer Relationship Management (CRM) software programs
              which are crucial to client processes.
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
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
          px={{ base: "6", md: "40", lg: "0" }}
        >
          <Fade top>
            <Heading
              textTransform={"uppercase"}
              fontWeight={"light"}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              Social Media
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Even conversations on social media such as Facebook, Twitter,
              Instagram, and LinkedIn can be a part of the omni-channel
              solutions of your Touchstone team.
            </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={socialmedia} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
      <Stack
        py={{ base: "12", lg: "28" }}
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
            <Image src={eretail} layout={"responsive"} />
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
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              E-Retail Support
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              In 2020, e-retail sales surpassed “brick and mortar” sales. This
              trend shows no signs of slowing. Customers are increasingly
              demanding that retailers provide the level and type of customer
              support they prefer.
            </Text>
          </Fade>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Omni;
