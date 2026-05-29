import React from "react";
import {
  Text,
  Image,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box
} from "@chakra-ui/react";
import WorkItemModal from "./WorkItemModal";




interface WorkProps{
    title: string,
    briefDesc: string,
    desc: string,
    link: string | null,
    linkLabel: string | null,
    role: string | null
    tags: string[],
    image: string | string[],
    bullets: [string, string][],
    year: number,
    i: number,
    dim: string | null
}

export default function WorkItem(props: WorkProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

    function getTextAlign(){
      if (props.i % 2 == 0){
        return "left";
      } else {
        return "right";
      }
    };

    function getPreviewImage(idx: number){
      if (Array.isArray(props.image)){
        return props.image[idx];
      } else {
        return props.image;
      }
    }

    return (
      <>
    <Box w="100%" 
        minH="10rem" 
        zIndex={3} 
        transition="all 0.2s ease-in-out"
        _hover={{ transform: 'scale(1.02)', shadow: '2xl' }}
        borderRadius={"1rem"}
        onClick={onOpen}
      >
    
       <Grid
        scrollSnapType="y"
        templateAreas={props.i % 2 == 0 ? {
          md: `"main desc"`,
          base: `"main" 
                  "desc"`,
        } : {
            md: `"desc main"`,
           base: `"main" 
                  "desc"`,
        }}
        gridTemplateRows={{md: "1fr", base: "1fr auto" }}
        gridTemplateColumns={{md: "1fr 1fr", base: "1fr" }}
        w="100%"
        h="100%"
        bg="transparent"
        _hover={{ bg: "red.500" }} 
        transition="background 0.2s ease-in-out"
        gap={{base: "1rem", md: "2rem"}}
        
      >
    <GridItem area={"main"}>
        <Image
            objectFit="cover"
            src={getPreviewImage(0)}
            borderRadius={".5rem"}
            key={Date.now()}
            h="100%"
            w="100%"
        />
    </GridItem>
    <GridItem area={"desc"} display="flex" justifyContent={"center"} flexDir="column" gap={{base: "1rem"}} padding="1rem">
       
            <Text variant="h4" lineHeight={"80%"} textAlign={{base: "center", md: getTextAlign()}}>
            {props.title}
            </Text>
            <Text variant="type" color="blue" textAlign={{base: "center", md: getTextAlign()}}>
            {props.briefDesc}
            </Text>

      </GridItem>
      </Grid>
    </Box>
     <Modal isOpen={isOpen} onClose={onClose} isCentered size={"5xl"} scrollBehavior="inside">
        <ModalOverlay
          bg='whiteAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent bgColor={"#ffffff"} h={"80vh"} w="100vw" padding={"2rem"}>
          <ModalCloseButton size={"sm"}/>
          <ModalBody>
            <WorkItemModal title={props.title} desc={props.desc} link={props.link} linkLabel={props.linkLabel} role={props.role} tags={props.tags} image={getPreviewImage(1)} bullets={props.bullets} year={props.year} dim={props.dim} />
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
    );
}