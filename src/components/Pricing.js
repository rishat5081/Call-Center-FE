import React from "react";
import {
  Text,
  Heading,
  Stack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  chakra,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import pricingheader from "../assets/images/pricingheader.png";
import { Fade } from "react-reveal";
const Pricing = () => {
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
          alignSelf={"center"}
          textAlign={"start"}
          alignItems={{ base: "center", lg: "normal" }}
          direction={{ base: "column", lg: "column" }}
          w={{ base: "100%", lg: "50%" }}
          className="left-section"
        >
          <Fade bottom>
          <Heading fontWeight={"100"} fontSize={{ base: "3xl",lg:'5xl', xl: "7xl" }}>
          Get the Best Price.
          </Heading>
          <Heading
            py={{ base: "2", md: "4", lg: "8" }}
            fontSize={{ base: "3xl", xl: "5xl" }}
            fontWeight={"200"}
            textAlign={{base:'center',sm:'initial'}}
          >
            Calculate Your Outsourcing Cost Savings
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
              backgroundImage: `url(${pricingheader.src})`,
              width: "100%",

              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack py={"4"} px={"6"}>
        <Stack
          px={{base:'2',lg:'8'}}
          py={"4"}
          boxShadow={"2px 2px 11px 2px rgb(0 0 0 / 7%)"}
          borderRadius={"2xl"}
        >
          <Stack pb={"4"}>
            <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
              Please enter your current number of agents and cost in yellow
              boxes below.
            </Text>
            <HStack spacing={"8"} width={{base:'100%',md:'40%',xl:"20%"}} py={"4"}>
              <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                Number of Agents{" "}
              </Text>
              <Input
                _focus={{ border: "1.5px solid #DBAC81" }}
                border={"1.5px solid black"}
                _hover={{}}
                color={"black"}
                backgroundColor={"#ffdf40"}
                width="30%"
              />
            </HStack>
          </Stack>
          <Stack
            py={"4"}
            w={"100%"}
            direction={{base:"column",lg:'row'}}
            justifyContent={"space-between"}
          >
            <Stack
              borderRadius={"2xl"}
              w={{base:'100%',lg:"65%"}}
              bgColor={"#f0f0f0"}
              px={"4"}
              py={"4"}
              spacing={"8"}
            >
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text
                  w={"20%"}
                  fontSize={{base:'xx-small',md:'sm',lg:'md'}}
                  color={"#003366"}
                  fontWeight={"500"}
                >
                  Current Resources
                </Text>
                <Text
                  fontSize={{base:'xx-small',md:'sm',lg:'md'}}
                  w={"20%"}
                  color={"#003366"}
                  fontWeight={"500"}
                >
                  In-House (USA)
                </Text>
                <Text
                  fontSize={{base:'xx-small',md:'sm',lg:'md'}}
                  w={"20%"}
                  color={"#003366"}
                  fontWeight={"500"}
                >
                  Current Costs (Monthly)
                </Text>
                <Text
                  fontSize={{base:'xx-small',md:'sm',lg:'md'}}
                  w={"20%"}
                  color={"#003366"}
                  fontWeight={"500"}
                >
                  Touchstone Rate* (Offshore
                </Text>
                <Text
                  fontSize={{base:'xx-small',md:'sm',lg:'md'}}
                  w={"20%"}
                  color={"#003366"}
                  fontWeight={"500"}
                >
                  Touchstone Costs (Monthly)
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Agent Hourly Wage
                </Text>
                <InputGroup w={"20%"}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="black"
                    fontSize="md"
                    children="$"
                  />
                  <Input
                    w={"70%"}
                    _focus={{ border: "1.5px solid #DBAC81" }}
                    border={"1.5px solid black"}
                    _hover={{}}
                    color={"black"}
                    backgroundColor={"#ffdf40"}
                    placeholder="0.0"
                  />
                </InputGroup>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  $26,001
                </Text>
                <InputGroup w={"20%"}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="blue"
                    fontSize="md"
                    children="$"
                  />
                  <Input
                    w={"70%"}
                    _focus={{ border: "1.5px solid #DBAC81" }}
                    border={"1px solid black !important"}
                    _hover={{}}
                    color={"black"}
                    backgroundColor={"transparent"}
                    placeholder="0.0"
                  />
                </InputGroup>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  $26,001
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Supervisor Hourly Wage
                </Text>
                <InputGroup w={"20%"}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="black"
                    fontSize="md"
                    children="$"
                  />
                  <Input
                    w={"70%"}
                    _focus={{ border: "1.5px solid #DBAC81" }}
                    border={"1.5px solid black"}
                    _hover={{}}
                    color={"black"}
                    backgroundColor={"#ffdf40"}
                    placeholder="0.0"
                  />
                </InputGroup>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  $26,001
                </Text>
                <Stack w={"20%"}>
                  <Switch colorScheme="blue" size="lg" />
                </Stack>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Included in Agent Costs
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Trainer Hourly Wage
                </Text>
                <InputGroup w={"20%"}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="black"
                    fontSize="md"
                    children="$"
                  />
                  <Input
                    w={"70%"}
                    _focus={{ border: "1.5px solid #DBAC81" }}
                    border={"1.5px solid black"}
                    _hover={{}}
                    color={"black"}
                    backgroundColor={"#ffdf40"}
                    placeholder="0.0"
                  />
                </InputGroup>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  $26,001
                </Text>
                <Stack w={"20%"}></Stack>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Included in Agent Costs
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Team Lead Hourly Wage
                </Text>
                <InputGroup w={"20%"}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="black"
                    fontSize="md"
                    children="$"
                  />
                  <Input
                    w={"70%"}
                    _focus={{ border: "1.5px solid #DBAC81" }}
                    border={"1.5px solid black"}
                    _hover={{}}
                    color={"black"}
                    backgroundColor={"#ffdf40"}
                    placeholder="0.0"
                  />
                </InputGroup>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  $26,001
                </Text>
                <Stack w={"20%"}></Stack>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Included in Agent Costs
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Employer Costs (FICA, Benefits, etc)
                </Text>
                <Stack w={"20%"}></Stack>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  $26,001
                </Text>
                <Stack w={"20%"}></Stack>
                <Text
                  textAlign={"initial"}
                  w={"20%"}
                  color={"#777777"}
                  fontSize={{base:"xx-small",md:'sm',lg:'md'}}
                >
                  Included in Agent Costs
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={{base:"xx-small",md:'sm',lg:'md'}} fontWeight={"500"}>
                  *Touchstone rates vary based upon volume and tasks. Contact
                  <chakra.span>
                    <Link
                      color={"#0c6ecf"}
                      _hover={{ color: "#FFDF40", bgColor: "black" }}
                    >
                      {" "}
                      mmeyer@touchstonebpo.com
                    </Link>
                  </chakra.span>{" "}
                  for custom pricing proposal.
                </Text>
              </Stack>
              <Stack
                direction={"row"}
                bgColor={"#ffdf40"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>TOTAL LABOR COST</Heading>
                <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>$40,649</Heading>
                <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>$11,334</Heading>
              </Stack>

              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  Office Space ($25 per sq ft)
                </Text>
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  $40,649
                </Text>
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  Included in Agent Costs
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  Office Space ($25 per sq ft)
                </Text>
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  $40,649
                </Text>
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  Included in Agent Costs
                </Text>
              </Stack>
              <Stack
                w={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
                p={"3"}
              >
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  Office Space ($25 per sq ft)
                </Text>
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  $40,649
                </Text>
                <Text color={"#777777"} fontSize={{base:"xx-small",md:'sm',lg:'md'}}>
                  Included in Agent Costs
                </Text>
              </Stack>

              <Stack
                w={"100%"}
                direction={"row"}
                px={"3"}
                justifyContent={"space-between"}
              >
                <HStack
                  justifyContent={"space-between"}
                  w={"55%"}
                  py={"6"}
                  bgColor={"#ffdf40"}
                  pr={"2"}
                >
                  <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>TOTAL LABOR COST</Heading>
                  <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>$40,649</Heading>
                </HStack>
                <HStack
                  pl={"2"}
                  pr={"12"}
                  justifyContent={"space-between"}
                  marginLeft={"0 !important"}
                  w={"45%"}
                  py={"6"}
                  color={"white"}
                  bgColor={"#003366"}
                >
                  <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>TOUCHSTONE COST</Heading>
                  <Heading fontSize={{base:"xx-small",md:'sm',lg:'md'}}>$11,334</Heading>
                </HStack>
              </Stack>
            </Stack>
            <Stack
              borderRadius={"2xl"}
              w={{base:"100%",lg:"30%"}}
              bgColor={"#f0f0f0"}
              px={"6"}
              py={"12"}
              spacing={"12"}
              h={'fit-content'}
            >
              <Stack spacing={'12'} textAlign={'center'} p={{base:'8',md:'14'}} bgColor={"#FFDF40"} borderRadius={"2xl"}>
                <Text fontSize={'2xl'} lineHeight={"10"}>
                  TOTAL
                  <br />
                  IN-HOUSE COSTS
                </Text>
                <Text fontSize={'2xl'}>$48,943</Text>
              </Stack>
              <Stack color={'white'} spacing={'8'} textAlign={'center'} py={{base:'8',md:'20'}} px={'8'} bgColor={"#003366"} borderRadius={"2xl"}>
                <Text fontSize={'2xl'} lineHeight={"10"}>
                  TOTAL
                  <br />
                  TOUCHSTONE COSTS
                </Text>
                <Text fontSize={'2xl'}>$11,334</Text>
                <Text fontSize={'2xl'}>Savings 77%</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Pricing;
