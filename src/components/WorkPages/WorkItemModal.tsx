import React from "react";
import {
  Text,
  Image,
  Grid,
  GridItem,
  Flex,
  ListItem,
  UnorderedList,
  Icon,
  Tooltip,
  Link as ChakraLink
} from "@chakra-ui/react";
import LanguageTag from "../../styles/LanguageTag";
import { RiGithubFill, RiLink, RiMailOpenLine, RiYoutubeFill } from "react-icons/ri";



interface PortfolioInfo{
    title: string,
    desc: string,
    link: string| null,
    linkLabel: string | null,
    role: string | null
    tags: string[],
    image: string | null,
    bullets: [string, string][],
    year: number,
    dim: string | null
}

export default function WorkItemModal(props: PortfolioInfo) {
    const boxSize = 8;

    return (
         <Grid
            scrollSnapType="y"
            templateAreas={{
                md: `"desc image"`,
                base: `"image" 
                        "desc"`,
            }}
            gridTemplateRows={{md: "1fr", base: "1fr auto" }}
            gridTemplateColumns={{md: "1fr 1fr", base: "1fr" }}
            w="100%"
            h="100%"
            bg="transparent"
            _hover={{ bg: "red.500" }} 
            transition="background 0.2s ease-in-out"
            gap="2rem"
            pr={{md: "0rem", base: "1rem" }}
        >
            <GridItem area={"image"} 
            display="flex" 
            justifyContent={"center"} 
            alignItems="flex-start"
            >
                <Flex
                bgGradient={"linear-gradient(223deg,rgba(234, 239, 255, 1) 31%, rgba(255, 188, 189, 1) 87%);"}
                w="100%"
                padding={{md: "2rem", base: ".5rem"}}
                borderRadius={"1rem"}
                >
                    <Image
                    objectFit={props.dim === "wide" ? "contain" : "cover"}
                    src={props.image ? props.image : "/images/placeholder.png"}
                    borderRadius={".5rem"}
                    key={Date.now()}
                    h={props.dim === "wide" ? "auto" : "80%"}

                />

                </Flex>
                
            </GridItem>
            <GridItem area={"desc"} display="flex" justifyContent={"space-between"} flexDir="column" gap="2rem">     
                <Flex flexDir={"column"} gap="2rem">
                    <Flex justifyContent={{md: "space-between", base: "center"}} alignItems={"center"} flexDir={{md: "row", base: "column"}} gap={{base: "1rem", md: "0"}}>
                        <Text variant="h3" lineHeight={"80%"} textAlign={{base: "center", md: "left"}}>
                            {props.title}
                        </Text>
                        <Tooltip label={props.linkLabel} placement="left" hasArrow bg="blue" fontSize={".7rem"}> 
                            <ChakraLink href={props.link} isExternal>
                                <Icon
                                as={RiLink as any}
                                boxSize={boxSize}
                                fill={"blue"}
                                _hover={{ fill: "blue" }}
                                ></Icon>
                            </ChakraLink>
                        </Tooltip>

                    </Flex>
                   
                    <Text variant="type" color="blue" textAlign={{base: "center", md: "left"}}>
                        {props.desc}
                    </Text>
                     <Text variant="smallType" lineHeight={"80%"} textAlign={{base: "center", md: "left"}} display={props.role ? "block" : "none"}>
                            Role: {props.role}
                    </Text>
                     <Text variant="type" color="black" textAlign={{base: "center", md: "left"}}>
                    <UnorderedList>
                        {props.bullets.map((b) => (
                            <ListItem textAlign={"left"}>
                                {b[0] ? <b>{b[0]}</b> : ""}
                                {b[1]&& b[0] ? <b>{" → "}</b> : ""}
                                {b[1] ? b[1] : ""}
                            </ListItem>
                        ))}
                    </UnorderedList>
                    </Text>
                </Flex>
                <Flex>
                    {props.tags.map((t, key) => (
                        <LanguageTag lang={t} key={key}></LanguageTag>
                    ))}
                </Flex>
                
               

            </GridItem>

        </Grid>
    
    );
}