import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo-white.png";
import insta from "../assets/images/insta.png";
import fb from "../assets/images/fb.png";
import Linkedin from "../assets/images/Linkedin.png";
const Footer = () => {
  return (
    <Stack w={'100%'} bgColor={"#141618"} py={{base:'8',md:'14',lg:'20'}} px={{base:'8',md:'18',lg:'24'}}>
      <Stack
        alignItems={"center"}
        spacing={{base:'20',md:'24',lg:'32'}}
        direction={{base:'column',lg:'row'}}
      >
          <Stack alignItems={{base:'center',lg:'normal '}} direction={{base:"column",sm:'row'}} w={'80%'} spacing={{base:'16'}}>
        <Stack className="logo" h={"auto"} w={{base:'100%',md:'40%'}}>
          <Link>
            <Image h={"full"} w={"full"} src={logo} />
          </Link>
        </Stack>
        <Stack
          fontSize={"lg"}
          fontWeight={"400"}
          color={"#ffffff"}
          className="address"
        >
          <Text lineHeight={"2"}>
            9800 Hillwood Parkway,
            <br />
            Suite 140,
            <br />
            Fort Worth, Texas 76177
          </Text>
          <Text lineHeight={"2"}>info@touchstonebpo.com</Text>
          <Link w={"-moz-fit-content"} _hover={{ color: "#115cfa" }}>
            {" "}
            <Text lineHeight={"2"}>817-893-2132</Text>
          </Link>
        </Stack>
        </Stack>
        <Stack
          spacing={"8"}
          fontSize={"1.5rem"}
          justifyContent={"center"}
          direction={"row"}
          className="soacial-icons"
        >
          <Link _hover={{ color: "rgba(48,49,51,.5)" }}>
            {" "}
            <Image src={Linkedin} />
          </Link>{" "}
          <Link _hover={{ color: "rgba(48,49,51,.5)" }}>
            <Image src={fb} />
          </Link>
          <Link _hover={{ color: "rgba(48,49,51,.5)" }}>
            <Image src={insta} />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
