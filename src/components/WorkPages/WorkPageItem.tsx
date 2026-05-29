import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Card,
  Image,
  CardBody,
  Heading,
  Stack,
  CardFooter,
  Link,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";



interface WorkProps {
  desc: string;
  header: string | null;
  image: string | null;
}

export default function WorkPageItem(props: WorkProps) {
    return (
    <Grid
    scrollSnapType="y"
    templateAreas={{
        lg: `"decal main"`,
        base: `"main"`,
    }}
    gridTemplateRows="1fr"
    gridTemplateColumns={{ lg: "3rem 1fr", base: "1fr" }}
    w={{lg: "100%", base: "80%"}}
    >
        <GridItem area={"decal"} display="flex" alignItems={"center"} justifyContent={"center"}>
           <Flex w="100%" h=".5rem" bg="linear-gradient(222deg,rgba(255, 173, 174, 1) 0%, rgba(139, 187, 255, 1) 100%)" borderRadius={"1rem"}></Flex>
        </GridItem>
        <GridItem area={"main"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDir={{lg: "row", base: "column"}} gap="2rem">
            <Flex px={{lg: "2rem", base: "0rem"}} flexDir={"column"} gap="1rem">
                <Text variant="type" color="lightyellow" fontWeight={"900"}>
                    {props.header}
                </Text>
                <Text variant="type" color="lightyellow">
                    {props.desc}
                </Text>


            </Flex>
            <Image
                objectFit="contain"
                display={props.image? "block" : "none"}
                src={props.image ? props.image : ""}
                borderRadius={".5rem"}
                key={Date.now()}
                w={"25rem"}
            />
        </GridItem>
     </Grid>
    );
}