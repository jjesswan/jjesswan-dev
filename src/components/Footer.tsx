import {
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bottom={0}
      m="0"
      p="0"
      w="100%"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      py="2rem"
      >
      <Text variant="type" color="blue" fontSize={{base: ".75rem", lg: ".5rem"}} textAlign={"center"} zIndex={2}>
        designed + created with ♥<br></br>
        jessica wan 2026
      </Text>
    </Flex>
  );
}
