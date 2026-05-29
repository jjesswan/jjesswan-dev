import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Flex, Stack, Text, Icon, useBreakpointValue, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BackgroundVid from "../styles/BackgroundVid";
import BlobBg from "../styles/BlobBg";



export default function Home() {
  const texts = ["game developer.", "software engineer.", "artist.", "world builder."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000); // 1s

    return () => {
      // cleanup on dismount
      clearInterval(intervalId);
    };
  }, []); 

  const isLargeDevice = useBreakpointValue({ base: false, lg: true });
  
  return (
    <div id="top">
        {isLargeDevice && <BackgroundVid src="/images/header_transparent.webm"/>}
        <Box 
          display={{ base: "none", lg: "flex" }}
          position={"absolute"} 
          bgColor={"red"} 
          w={"100vw"} 
          right={{ lg: "6rem", base: "4rem" }} 

          h={"65vh"} 
          borderRightRadius={"1rem"} 
          mt="10vh" 
          bgGradient={"linear-gradient(223deg,rgba(234, 239, 255, 1) 31%, rgba(255, 188, 189, 1) 87%);"}
          transition="all 0.3s ease-in-out"
        />

        
        <Flex w="100vw" h="100vh" flexDir={"column"} justifyContent={{ lg: "flex-end", base: "center" }}  alignItems={{ lg: "flex-end", base: "center" }} overflow={"hidden"}>
            <Text
              variant="h1"
              color="white"
              mr={{ lg: "6rem", base: "0rem" }}
              zIndex={"2"}
              lineHeight={"1"}
            >
              jess wan
            </Text>
    
      </Flex>
    </div>
  );
}



          

