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
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import LanguageTag from "../../styles/LanguageTag";
import { RiLink } from "react-icons/ri";

interface PortfolioInfo {
  title: string;
  desc: string;
  link: string | null;
  linkLabel: string | null;
  role: string | null;
  tags: string[];
  image: string | null;
  bullets: [string, string][];
  year: number;
  dim: string | null; // no longer needed for layout, kept so existing data still type-checks
}

export default function WorkItemModal(props: PortfolioInfo) {
  const imageSrc = props.image ?? "/images/placeholder.png";
  // Tooltips don't work well on touch screens, so mobile shows the label as text instead
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Grid
      templateAreas={{
        base: `"image"
               "desc"`,
        md: `"desc image"`,
      }}
      // minmax(0, ...) stops long words or big images from stretching the columns/rows
      templateRows={{ base: "auto auto", md: "minmax(0, 1fr)" }}
      templateColumns={{ base: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 1fr)" }}
      w="100%"
      // Mobile: grow with content and let the modal scroll. Desktop: fill the modal.
      h={{ base: "auto", md: "100%" }}
      gap={{ base: "1.25rem", md: "1.5rem" }}
      overflowX="hidden"
      py={{ base: "1.25rem", md: 0 }}
    >
      {/* IMAGE */}
      <GridItem
        area="image"
        minW={0}
        minH={0}
        display="flex"
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="center"
      >
        <Image
          src={imageSrc}
          alt={props.title}
          w="auto"
          h="auto"
          maxW="100%"
          maxH={{ base: "50vh", md: "100%" }}
          borderRadius="1rem"
        />
      </GridItem>

      {/* DESCRIPTION */}
      <GridItem
        area="desc"
        minW={0}
        minH={0}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        gap={{ base: "1.25rem", md: "1rem" }}
        overflowY={{ base: "visible", md: "auto" }}
        pr={{ base: 0, md: ".5rem" }}
      >
        <Flex flexDir="column" gap="1rem">
          {/* Title + link */}
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ base: "center", md: "flex-start" }}
            gap={{ base: ".5rem", md: "1rem" }}
          >
            <Text
              variant="h3"
              lineHeight="110%"
              textAlign={{ base: "center", md: "left" }}
              wordBreak="break-word"
            >
              {props.title}
            </Text>

            {props.link && (
              <Tooltip
                label={props.linkLabel}
                placement="left"
                hasArrow
                bg="blue"
                fontSize=".7rem"
                isDisabled={!isDesktop || !props.linkLabel}
              >
                <ChakraLink
                  href={props.link}
                  isExternal
                  aria-label={props.linkLabel ?? `Open ${props.title}`}
                  display="inline-flex"
                  alignItems="center"
                  gap=".4rem"
                  p=".25rem" // larger tap target
                  flexShrink={0}
                  color="blue"
                >
                  <Icon as={RiLink as any} boxSize={{ base: 6, md: 8 }} fill="blue" />
                  {props.linkLabel && (
                    <Text as="span" fontSize=".85rem" display={{ base: "inline", md: "none" }}>
                      {props.linkLabel}
                    </Text>
                  )}
                </ChakraLink>
              </Tooltip>
            )}
          </Flex>

          <Text variant="type" color="blue" textAlign={{ base: "center", md: "left" }}>
            {props.desc}
          </Text>

          {props.role && (
            <Text variant="smallType" lineHeight="130%" textAlign={{ base: "center", md: "left" }}>
              Role: {props.role}
            </Text>
          )}

          {props.bullets.length > 0 && (
            // as="div": a <ul> inside a <p> is invalid HTML
            <Text as="div" variant="type" color="black">
              <UnorderedList spacing=".5rem" ml="1.25rem">
                {props.bullets.map((b, i) => (
                  <ListItem key={i} textAlign="left">
                    {b[0] && <b>{b[0]}</b>}
                    {b[0] && b[1] && <b>{" → "}</b>}
                    {b[1]}
                  </ListItem>
                ))}
              </UnorderedList>
            </Text>
          )}
        </Flex>

        {props.tags.length > 0 && (
          <Flex flexWrap="wrap" gap=".5rem" justifyContent={{ base: "center", md: "flex-start" }}>
            {props.tags.map((t) => (
              <LanguageTag lang={t} key={t} />
            ))}
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
}
