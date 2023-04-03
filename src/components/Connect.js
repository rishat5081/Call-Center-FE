import {
  AspectRatio,
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Connect = () => {
  return (
    <Stack pt={"24"} px={{base:'4',md:'12',lg:'24'}}>
      <Heading
        pb={"6"}
        textAlign={"center"}
        fontWeight={"300"}
        fontSize={{base:'4xl',md:'5xl',lg:'7xl'}}
      >
        Get in Touch
      </Heading>
      <Stack direction={{base:'column',lg:'row'}} justifyContent={"space-between"} w={"100%"}>
        <Stack
        mb={{base:'8',lg:'0'}} 
          spacing={"8"}
          py={"8"}
          bgColor={"#F2F2F2"}
          px={"8"}
          w={{base:'100%',lg:"30%"}}
          className="left-section"
        >
          <Heading fontWeight={"400"} fontSize={"2xl"}>
            Email
          </Heading>
          <Link
            fontSize={"lg"}
            _hover={{ color: "#115cfa" }}
            textDecoration={"none !important"}
          >
            info@touchstonebpo.com
          </Link>
          <Heading fontWeight={"400"} fontSize={"2xl"}>
            ADDRESS
          </Heading>
          <Text lineHeight={"1.7"} fontSize={"lg"} color={"#777777"}>
            9800 Hillwood Parkway,
            <br />
            Suite 140,
            <br />
            Fort Worth, Texas 76177
          </Text>
          <Heading fontWeight={"400"} fontSize={"2xl"}>
            PHONE
          </Heading>
          <Link
            fontSize={"lg"}
            _hover={{ color: "#115cfa" }}
            textDecoration={"none !important"}
          >
            817-893-2132
          </Link>
          <Heading fontWeight={"400"} fontSize={"2xl"}>
            HOURS
          </Heading>
          <Text lineHeight={"1.7"} fontSize={"lg"} color={"#777777"}>
            Monday – Friday
            <br />
            08:00 AM – 5:00 PM (CST)
          </Text>
        </Stack>
        <Stack w={{base:'100%',lg:'60%'}} className="right-section">
          <Button
            p={"6"}
            color={"white"}
            fontWeight={"400"}
            fontSize={"md"}
            _hover={{ bgColor: "transparent", color: "#000000" }}
            bgColor={"#000000"}
            border={"1px solid black !important"}
            w={"fit-content"}
            borderRadius={"full"}
            variant={"outline"}
          >
            Looking For a Job? Click Here
          </Button>
          <Stack spacing={"8"}>
            <Stack pt={"8"} spacing={"6"} direction={"row"}>
              <Input
                isRequired
                borderRadius={"none"}
                bgColor={"#f7f7f7"}
                border={"0.5px solid black !important"}
                _focus={{ border: "1.5px solid blue !important" }}
                placeholder="Full Name*"
                size="md"
              />
              <Input
                isRequired
                borderRadius={"none"}
                bgColor={"#f7f7f7"}
                border={"0.5px solid black !important"}
                _focus={{ border: "1.5px solid blue !important" }}
                placeholder="Email*"
                size="md"
              />
            </Stack>
            <Stack spacing={"6"} direction={"row"}>
              <Input
                borderRadius={"none"}
                isRequired
                bgColor={"#f7f7f7"}
                border={"0.5px solid black !important"}
                _focus={{ border: "1.5px solid blue !important" }}
                placeholder="Phone*"
                size="md"
              />
              <Input
                isRequired
                bgColor={"#f7f7f7"}
                borderRadius={"none"}
                border={"0.5px solid black !important"}
                _focus={{ border: "1.5px solid blue !important" }}
                placeholder="Business URL*"
                size="md"
              />
            </Stack>
            <Input
              bgColor={"#f7f7f7"}
              borderRadius={"none"}
              border={"0.5px solid black !important"}
              _focus={{ border: "1.5px solid blue !important" }}
              placeholder="Subject"
              size="md"
            />
            <Textarea
              bgColor={"#f7f7f7"}
              borderRadius={"none"}
              border={"0.5px solid black !important"}
              _focus={{ border: "1.5px solid blue !important" }}
              placeholder="Message"
              size="lg"
              resize={"none"}
              height={"30vh"}
            />
            <Text fontWeight={"400"} fontSize={"lg"}>
              Interested In
            </Text>
            <CheckboxGroup>
              <Stack spacing={"2"} direction={"column"}>
                <Checkbox size={"md"} value="omni" color={"#777777"}>
                  Omni-Channel
                </Checkbox>
                <Checkbox size={"md"} color={"#777777"} value="inbound">
                  Inbound
                </Checkbox>
                <Checkbox size={"md"} color={"#777777"} value="outbound">
                  Outbound
                </Checkbox>
                <Checkbox size={"md"} color={"#777777"} value="bpo">
                  BPO
                </Checkbox>
                <Checkbox size={"md"} color={"#777777"} value="lead">
                  Lead Gen
                </Checkbox>
              </Stack>
            </CheckboxGroup>
            <Button
              p={"6"}
              color={"white"}
              fontWeight={"500"}
              fontSize={"lg"}
              _hover={{ bgColor: "transparent", color: "#000000" }}
              bgColor={"#000000"}
              border={"1px solid black !important"}
              w={"full"}
              borderRadius={"full"}
              variant={"outline"}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={'12'} py={"24"}>
        <Heading fontWeight={"500"} fontSize={"3xl"}>
          Head office:
        </Heading>
        <Stack w={'100%'}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              alt="demo"
            />
          </AspectRatio>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Connect;
