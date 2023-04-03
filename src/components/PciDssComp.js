import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import pci from "../assets/images/pci.png";
import card from "../assets/images/card.png";
import datasecurity from "../assets/images/datasecurity.png";
import sales from "../assets/images/sales.png";
import cart from "../assets/images/cart.png";
import payment from "../assets/images/payment.png";
import ReadMoreReadLess from "./ReadMoreReadLess";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const PciDssComp = () => {
  return (
    <Stack>
      <Stack
        px={{ base: "4", md: "8", lg: "24" }}
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        bgColor={"#FCFCFC"}
        justifyContent={"space-between"}
        className="pci-dss"
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
              PCI Compliance.
            </Heading>
            <Heading
              py={{ base: "2", md: "4", lg: "8" }}
              fontSize={{ base: "3xl", lg: "3xl", xl: "5xl" }}
              fontWeight={"200"}
            >
              Over the phone payments.
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
              backgroundImage: `url(${pci.src})`,
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
              Credit Card Transactions
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Touchstone’s secure payment systems comply with MasterCard, Visa,
              and other major credit card requirements. As a PCI Compliant Call
              Center providing 24/7 service, e-retailers, travel companies can
              confidently outsource sales desks, reservations, and customer
              service.
            </Text>
          </Fade>
        </Stack>
        <Stack w={{ base: "100%", lg: "50%" }} className="right-section">
          <Zoom>
            <Image src={card} layout={"responsive"} />
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
            <Image src={datasecurity} layout={"responsive"} />
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
              Highest Level Data Security
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Customer privacy and credit card data security require safe
              network and facility security.
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
              Sales Desk
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Our income support exists most effectively to assist sales reps in
              making offers. We have agents dedicated to the sole requirements
              of retention and customer success-oriented sales, and they’re
              valued more than anyone.
            </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={sales} layout={"responsive"} />
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
            <Image src={cart} layout={"responsive"} />
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
              Cart Recovery
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Abandoned carts are a major source of lost income for e-retailers.
              Touchstone can engage with customers through omni-channel
              communication to recover lost income due to abandoned carts.
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
              Integration into Client Payment Systems
            </Heading>
            <Text
              py={"4"}
              fontWeight={"300"}
              lineHeight={"1.7"}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Touchstone can integrate into client payment systems while
              exceeding PCI call center compliance requirements
            </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={payment} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PciDssComp;
