import { Box, Flex, Icon, Tooltip } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { RiHome2Line, RiStackLine, RiFileListLine, RiMailOpenLine } from "react-icons/ri";

import ResumePDF from "../documents/Jessica_Wan_Resume.pdf?url";

export default function Navbar() {
  const size = 4;
  return (
    <Box
      position={"fixed"}
      zIndex={"sticky"}
      right={{ base: "1rem", lg: "2rem" }}
      mx='0'
      p="0"
      display={"flex"}
      flexDir={"column"}
      top={"10%"}
    >
      <Flex
      flexDir={"column"}
      justifyContent={"space-between"}
      >

        <Tooltip label="Home" placement="left" hasArrow bg="white" fontSize={".7rem"}> 
          <HashLink smooth to="/#top">
            
              <Icon
                as={RiHome2Line as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
        </Tooltip>
        <Tooltip label="Work" placement="left" hasArrow bg="white" fontSize={".7rem"}> 
          <HashLink smooth to="/#work">
              <Icon
                as={RiStackLine as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
          </Tooltip>
          <Tooltip label="Resume" placement="left" hasArrow bg="white" fontSize={".7rem"}> 
          <a href={ResumePDF} target="_blank" rel="noreferrer">
              <Icon
              as={RiFileListLine as any}
              boxSize={size}
              fill={"white"}
              mb=".5rem"
            ></Icon>
          </a>
          </Tooltip>
          <Tooltip label="Contact" placement="left" hasArrow bg="white" fontSize={".7rem"}> 
          <HashLink smooth to="/#contact">
              <Icon
                as={RiMailOpenLine as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
          </Tooltip>
         
       
      </Flex>
    </Box>
  );
}
