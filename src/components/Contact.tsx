import { Button, ButtonGroup, Flex, Icon, Text, Tooltip, Link as ChakraLink, IconButton, useBreakpointValue} from "@chakra-ui/react";
import { RiMailOpenLine, RiGithubLine, RiLinkedinBoxLine, RiInstagramLine } from "react-icons/ri";


export default function Contact() {
  const boxSize = 10;
  const isLargeDevice = useBreakpointValue({ base: false, lg: true });
  
  return (
    <div id="contact" style={{ position: "relative", zIndex: 1 }}>
        <Flex
          flexDir="column"
          justifyContent={"center"}
          alignItems={"center"}
          gap="1rem"
        >
          <Text variant={"h2"} color="white">
            Let's get in touch!
          </Text>
          <Flex justifyContent={"center"} gap="1rem">
          <Tooltip label="Email" placement="bottom" hasArrow bg="white" fontSize={".7rem"}> 
            <ChakraLink href="mailto:jessica_wan@alumni.brown.edu" isExternal>
               <Icon
                as={RiMailOpenLine as any}
                boxSize={boxSize}
                fill={"blue"}
                _hover={{ fill: "blue" }}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          <Tooltip label="LinkedIn" placement="bottom" hasArrow bg="white" fontSize={".7rem"}> 
            <ChakraLink href="https://www.linkedin.com/in/jessicawan02/" isExternal>
               <Icon
                as={RiLinkedinBoxLine as any}
                boxSize={boxSize}
                fill={"blue"}
                _hover={{ fill: "blue" }}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          <Tooltip label="GitHub" placement="bottom" hasArrow bg="white" fontSize={".7rem"}> 
            <ChakraLink href="https://github.com/jjesswan" isExternal>
               <Icon
                as={RiGithubLine as any}
                boxSize={boxSize}
                fill={"blue"}
                _hover={{ fill: "blue" }}
              ></Icon>
            </ChakraLink>
          </Tooltip>
          </Flex>
          {isLargeDevice && (
            <Flex w={{base: "100%", lg: "50%"}} display={{lg: "flex", base: "none"}}>
                <video
              loop
              autoPlay
              muted
            >
              <source src="/images/stars.webm" type="video/webm" />
            </video>
          </Flex>)
      }
        
      </Flex>
    </div>
  );
}
