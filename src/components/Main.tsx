import { Flex } from "@chakra-ui/react";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./WorkPages/Work";
import BlobBg from "../styles/BlobBg";

export default function Main() {
  return (
    <div role="main" style={{ scrollSnapType: "y mandatory" }}>
      <Flex
        scrollSnapType={"y"}
        flexDir={"column"}
        bgAttachment="fixed"
        bgSize="cover"
        overflowX={"hidden"}
        position="relative"
      >
        <Home />
        <Work />
        <Contact/>
        <BlobBg color="linear-gradient(223deg,rgb(99, 162, 250) 0%, rgb(255, 233, 219) 51%" 
                  w={800} 
                  h={850}
                  shift33={[50,40,40,90]} 
                  shift66={[30,60,10,20]} 
                  translate33={[25,10]} 
                  translate66={[-20,-10]} 
                  mt="120%"
                  ml="-10%"/>
      </Flex>
    </div>
  );
}
