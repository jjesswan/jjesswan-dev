import {
  Tag,
  Text
} from "@chakra-ui/react";

interface TagProps {
  lang: string
}

type CodeLang = {
    name: string,
    color: string
}

const allLangs: CodeLang[] = [
  { name: "html/css", color: "#FF6666" },
  { name: "react.js", color: "#37ADF0" },
  { name: "java", color: "#8566FF" },
  { name: "c++", color: "#7AB470" },
  { name: "blender", color: "#ED9360" },
  { name: "vue", color: "#2D8E88" },
  { name: "python", color: "#245374" },
  { name: "typescript", color: "#79C7FF" },
];

export default function LanguageTag(props: TagProps) {
    const tagColor : string = allLangs.find((l) => l.name == props.lang)?.color?? '#000'
  return (
    <Tag
      mr=".5rem"
      borderRadius={"1rem"}
      bg={tagColor}
    >
      <Text
        variant={"type"}
        letterSpacing={"1px"}
        textColor={"#fff"}
       >
        {props.lang}
      </Text>
    </Tag>
  );
}
