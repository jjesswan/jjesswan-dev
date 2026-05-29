import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Grid,
  GridItem,
  Switch,
  Card,
} from "@chakra-ui/react";

import WorkItem from "./WorkItem";
import info from "../../content/portfolioInfo";

export default function Work() {
 

  return (
    <div id="work" style={{ scrollSnapType: "y" }}>
      <Flex
        scrollSnapType="y"
        px={{base:"10%", lg: "25%"}}
        my="10rem"
        flexDir={"column"}
        gap={{base: "3rem", lg: "5rem"}}
      >
        {info.map((item, index) => (
          <WorkItem
            key={index}
            title={item.title}
            desc={item.desc}
            briefDesc={item.briefDesc}
            link={item.link}
            linkLabel={item.linkLabel}
            role={item.role}
            tags={item.tags}
            image={item.image}
            bullets={item.bullets}
            year={item.year}
            i={index}
            dim={item.dim}
          />
        ))}
      </Flex>
    </div>
  );
}
