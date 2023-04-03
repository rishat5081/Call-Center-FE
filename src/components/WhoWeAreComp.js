import {
  Box,
  Circle,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import whoWeAre from "../assets/images/whoWeAre.png";
import Image from "next/image";
import yousaf from "../assets/images/yousaf.jpg";
import miki from "../assets/images/miki.png";
import ikram from "../assets/images/ikram.jpg";
import taimoor from "../assets/images/taimoor.jpg";
import rabani from "../assets/images/rabani.jpg";
import musawar from "../assets/images/musawar.jpg";
import hasham from "../assets/images/hasham.jpg";
import corporate from "../assets/images/corporate.png";
import { FaPlay } from "react-icons/fa";
import ReadMoreReadLess from "./ReadMoreReadLess";
import { Fade } from "react-reveal";
const WhoWeAreComp = () => {
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
              py={{ base: "8", lg: "0" }}
              fontWeight={"100"}
              fontSize={{ base: "3xl", md: "5xl", xl: "7xl" }}
            >
              Who We Are
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
              backgroundImage: `url(${whoWeAre.src})`,
              width: "100%",

              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack pb={"8"} marginTop={"0 !important"}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          w={"100%"}
          bgColor={"#F7F7F7"}
          px={{ base: "6", md: "12", lg: "24" }}
          py={"16"}
        >
          <Stack
            borderLeft={"2px solid #115cfa !important"}
            w={{ base: "100%", lg: "46%" }}
          >
            <Stack pl={"8"}>
              <Heading
                pb={"6"}
                color={"#303133"}
                fontWeight={"500"}
                fontSize={"3xl"}
              >
                Our Story
              </Heading>
              <ReadMoreReadLess>
                <Text color={"#777777"} lineHeight={"1.8"} fontSize={"lg"}>
                  For 20 years, Touchstone has provided growing companies with
                  contact & call center solutions that drive growth and quality.
                  It doesn’t only stop there, legendary businessman and
                  co-Founder Tom Slone set the standard for call center
                  leadership serving as Touchstone’s CEO from 2003-2017
                  Virtually, every call center in Pakistan has leadership that
                  learned the industry at Touchstone. Today, Touchstone, a U.S.
                  corporation, owns and operates five facilities worldwide
                  having transformed into a data-driven, AI-based enterprise
                  driving innovation, efficiency, and scalability to customers
                  around the globe.
                </Text>
              </ReadMoreReadLess>
            </Stack>
          </Stack>
          <Stack
            borderLeft={"2px solid #115cfa !important"}
            w={{ base: "100%", lg: "46%" }}
          >
            <Stack pl={"8"}>
              <Heading
                pb={"6"}
                color={"#303133"}
                fontWeight={"500"}
                fontSize={"3xl"}
              >
                Our Vision
              </Heading>
              <ReadMoreReadLess>
                <Text color={"#777777"} lineHeight={"1.8"} fontSize={"lg"}>
                  Touchstone Communications Connects. We connect people with the
                  data, technologies, and processes to accelerate and improve
                  lives. Dedicated to the proposition that Excellence is
                  achieved through the combination of A-grade talent,
                  world-class training, and a relentless commitment to quality.
                  Touchstone, working with industry-leading companies, delivers
                  extraordinary customer experiences with each “touchpoint.” By
                  aligning people, processes, and technology, the future is
                  delivered with every contact.
                </Text>
              </ReadMoreReadLess>
            </Stack>
          </Stack>
        </Stack>
        <Stack className="leadership" px={{ base: "0", lg: "32" }} py={"28"}>
          <Heading textAlign={"center"} fontWeight={"400"}>
            Leadership
          </Heading>
          <SimpleGrid
            py={"16"}
            minChildWidth={"250px"}
            spacingX="40px"
            spacingY="100px"
          >
            <Stack textAlign={"center"}>
              <Stack>
                <Image objectFit="contain" src={yousaf} />
              </Stack>
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Yousaf H Eashai
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Executive Officer
              </Text>
            </Stack>
            <Stack textAlign={"center"}>
              <Image objectFit="contain" src={ikram} />
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Muhammad Ahsan
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Financial Officer
              </Text>
            </Stack>
            <Stack textAlign={"center"}>
              <Image objectFit="contain" src={rabani} />
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Yousaf H Eashai
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Executive Officer
              </Text>
            </Stack>
            <Stack textAlign={"center"}>
              <Image objectFit="contain" src={miki} />
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Mike Meyer
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Marketing Officer
              </Text>
            </Stack>
            <Stack textAlign={"center"}>
              <Image objectFit="contain" src={taimoor} />
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Yousaf H Eashai
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Executive Officer
              </Text>
            </Stack>
            <Stack textAlign={"center"}>
              <Image objectFit="contain" src={musawar} />
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Yousaf H Eashai
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Executive Officer
              </Text>
            </Stack>
            <Stack textAlign={"center"}>
              <Image objectFit="contain" src={hasham} />
              <Heading
                pt={"8"}
                lineHeight={"0.7"}
                fontSize={"lg"}
                fontWeight={"500"}
              >
                Yousaf H Eashai
              </Heading>
              <Text fontSize={"lg"} color={"#777777"}>
                Chief Executive Officer
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>
        <Stack
          style={{
            opacity: "2.5",
            backgroundImage: `url(${corporate.src})`,
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack>
            <Link>
              <Circle
                transitionDuration={"0.7s"}
                transitionDelay={".5s"}
                transition={"transform .2s"}
                _hover={{ transform: "scale(1.3)" }}
                size={"24"}
                bgColor={"#6F8F93"}
              >
                <Circle size={"20"} bgColor={"white"}>
                  <FaPlay fontSize={"2rem"} />
                </Circle>
              </Circle>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhoWeAreComp;
