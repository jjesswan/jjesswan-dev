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
            templateAreas={{
                md: `"desc image"`,
                base: `"image" 
                        "desc"`,
            }}
            gridTemplateRows={{md: "1fr", base: "1fr auto" }}
            gridTemplateColumns={{md: "1fr 1fr", base: "1fr" }}
            w="100%"
            h="100%"
            gap="1rem"
            pr={{md: "0rem", base: ".5rem" }}
            overflowX={"hidden"}
        >
            <GridItem area={"image"} 
                display="flex" 
                justifyContent={"center"} 
                alignItems="flex-start"
            >
                <Flex
                bgGradient={"linear-gradient(223deg,rgba(234, 239, 255, 1) 31%, rgba(255, 188, 189, 1) 87%);"}
                padding={{md: "1rem", base: "1rem"}}
                borderRadius={"1rem"}
                justifyContent={"center"}
                alignItems={"center"}
                w={props.dim === "wide" ? "100%" : "70%"}
                >
                    <Image
                    objectFit={props.dim === "wide" ? "contain" : "cover"}
                    src={props.image ? props.image : "/images/placeholder.png"}
                    borderRadius={".5rem"}
                    key={Date.now()}
                    
                />
                </Flex>
            </GridItem>
            <GridItem 
                area={"desc"} 
                display="flex" 
                flexDir="column" 
                gap={{md: ".5rem", base: "2rem"}}
                overflowY={{md: "scroll", base: "visible"}}
                justifyContent={"space-between"}
                >     
                <Flex flexDir={"column"} gap={{lg: "1rem", base: "2rem"}}>
                    <Flex 
                    justifyContent={{md: "space-between", base: "center"}} 
                    alignItems={"center"} 
                    flexDir={{md: "row", base: "column"}} 
                    gap="2rem">
                        <Text variant="h3" lineHeight={"100%"} textAlign={{base: "center", md: "left"}}>
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