import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import bpoheader from "../assets/images/bpoheader.png";
import call from "../assets/images/call.png";
import accounting from "../assets/images/accounting.png";
import marketing from "../assets/images/marketing.png";
import legal from "../assets/images/legal.png";
import hr from "../assets/images/hr.png";
import ReadMoreReadLess from "./ReadMoreReadLess";
import { Zoom,Fade } from "react-reveal";
const BpoComp = () => {
  return (
    <Stack>
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        w={"100%"}
        bgColor={"#FCFCFC"}
        justifyContent={"space-between"}
        className="pci-dss"
        alignItems={"start"}
      >
        <Stack
          pl={{ base: "4", md: "8", lg: "24" }}
          alignSelf={"end"}
          textAlign={"center"}
          alignItems={{ base: "center", lg: "normal" }}
          direction={{ base: "column", lg: "column" }}
          w={{ base: "100%", lg: "40%" }}
          className="left-section"
        >
          <Fade bottom>
          <Heading fontWeight={"100"} fontSize={{ base: "3xl", xl: "7xl" }}>
            BPO Contact Center.
          </Heading>
          <Heading
            py={{ base: "2", md: "4", lg: "8" }}
            fontSize={{ base: "3xl", xl: "5xl" }}
            fontWeight={"200"}
          >
            BPO Redefined.
          </Heading>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "60%" }}
          className="right-section"
        >
          <Stack
            h={{ base: "25vh", md: "60vh", xl: "60vh" }}
            style={{
              backgroundImage: `url(${bpoheader.src})`,
              width: "100%",

              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack p={{ base: "8", md: "12", lg: "20" }} w={"100%"}>
        <Text lineHeight={"1.8"} fontSize={{ base: "md", md: "lg" }}>
          Customer service outsourcing has been around for 25 years. U.S.
          companies typically outsource customer service or back-office
          functions to save money. Touchstone clients save 40-70% compared to
          the cost of U.S. companies providing these same services in-house.
          <br />
          Today, BPO outsourcing has evolved beyond just a cost savings
          strategy. What is BPO? Touchstone has redefined what it means to be a
          BPO contact center to include:
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
            Call Analytics
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            For more than a decade, Touchstone has been a leader in providing
            call analytic services to industry leaders in the automotive and
            financial services industry. Call analytics uses technology and
            trained staff to analyze calls and customer interactions to uncover
            problems and opportunities. Clients using call analytics typically
            see a 40% improvement.
          </Text>
          </Fade>
        </Stack>
        <Stack w={{ base: "100%", lg: "50%" }} className="right-section">
          <Zoom>
          <Image src={call} layout={"responsive"} />
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
            <Image src={accounting} layout={"responsive"} />
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
            Accounting
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone provides clients with accounting professionals at every
            level. From basic data entry and bookkeeping to high-level CPA,
            Touchstone can provide high-quality accounting services at
            tremendous cost savings.
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
            Legal Services
          </Heading>
          <Text py={"4"} fontWeight={"300"} lineHeight={"1.7"}>
            It is really amazing that fully trained attorneys can be obtained at
            a fraction of the cost of hiring an attorney in the U.S. Most of the
            top law firms in the U.S. maintain a team of offshore attorneys to
            lower costs, improve turnaround times, and process time-demanding
            services such as deposition summaries.
          </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={legal} layout={"responsive"} />
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
            <Image src={marketing} layout={"responsive"} />
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
            Marketing Services
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            The cost of marketing for small and mid-sized businesses has never
            been higher. The Internet, more channels, and more competition have
            combined to create a more difficult environment for businesses to
            connect with prospects.
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
            HR
          </Heading>
          <Text
            py={"4"}
            fontWeight={"300"}
            lineHeight={"1.7"}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Touchstone has fully trained HR teams to help small and medium
            businesses streamline their human resource processes at little
            expense. We provide cost-effective HR solutions, efficiently
            fulfilling all HR duties, allowing you to focus on other
            interviewing finalists or handling the most important HR issues.
          </Text>
          </Fade>
        </Stack>
        <Stack
          h={"100%"}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Zoom>
            <Image src={hr} layout={"responsive"} />
          </Zoom>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BpoComp;
