import {
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../assets/images/Org-Logo.png";
import { GrMenu } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Stack
    pos={'fixed'}
      transition={
        "transform 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86), width 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86)"
      }
      position={"sticky"}
      overflow={"hidden"}
      bg={"transparent"}
      alignItems={"center"}
      justifyContent={"space-between"}
      direction={"row"}
      p={{base:'2',md:'4',lg:'8'}}
    >
      <Stack className="logo" h={"auto"} w={{base:'30%',md:'18%'}}>
        <Link>
          <Image h={"full"} w={"full"} src={logo} className={'test'} />
        </Link>
      </Stack>
      <Stack className="drawer">
        <Button
          bg={{}}
          _hover={{}}
          _focus={{}}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          <GrMenu fontSize={"1.5rem"} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          
          <DrawerContent>
            <DrawerCloseButton bg={{}} _hover={{}} _focus={{}} />

            <DrawerBody>
              <Stack
                spacing={"2.5"}
                fontSize={"lg"}
                fontWeight={"600"}
                textAlign={"center"}
                py={"10"}
                color={"#303133"}
              >
                <Link
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                  onClick={() => router.push("/")}
                >
                  HOME
                </Link>
                <Link
                  onClick={() => router.push("/OmniChannel")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  OMNI-CHANNEL
                </Link>
                <Link
                  onClick={() => router.push("/PciDss")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  PCI-DSS
                </Link>
                <Link
                  onClick={() => router.push("/Inbound")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  INBOUND
                </Link>
                <Link
                  onClick={() => router.push("/Outbound")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  OUTBOUND
                </Link>
                <Link
                  onClick={() => router.push("/Bpo")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  BPO/KPO
                </Link>
                <Link
                  onClick={() => router.push("/PricingCalculator")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  PRICING CALCULATOR
                </Link>
                <Link
                  onClick={() => router.push("/WhoWeAre")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  WHO WE ARE
                </Link>
                <Link
                  onClick={() => router.push("/ConnectNow")}
                  _hover={{ color: "rgba(48,49,51,.5)" }}
                >
                  CONNECT NOW
                </Link>
              </Stack>

              <Stack pt={"6"} className="'footer">
                <Stack
                  spacing={"2.5"}
                  fontSize={"1.5rem"}
                  justifyContent={"center"}
                  direction={"row"}
                  className="soacial-icons"
                >
                  <Link _hover={{ color: "rgba(48,49,51,.5)" }}>
                    {" "}
                    <MdFacebook />
                  </Link>{" "}
                  <Link _hover={{ color: "rgba(48,49,51,.5)" }}>
                    <FaLinkedinIn />
                  </Link>
                  <Link _hover={{ color: "rgba(48,49,51,.5)" }}>
                    <FiInstagram />
                  </Link>
                </Stack>
                <Stack pt={"10"} px={"12"} textAlign={"center"}>
                  <Text color={"#777777"} lineHeight={"1.8"} fontSize={"xs"}>
                    © 2022 Touchstone Communications. <br />
                    All rights reserved{" "}
                  </Text>
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    </Stack>
  );
};

export default Header;
