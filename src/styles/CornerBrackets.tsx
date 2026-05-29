import { Box, Image } from "@chakra-ui/react";

interface CornerBracketsProps {
    color: string;
    size: number;
    child: React.ReactNode;
    thickness: string;
}

export default function CornerBrackets(props: CornerBracketsProps) {
  const padding = 1;

  return (
    <Box position="relative" display="inline-block">
      <Box position={"absolute"} top="0" left="0">
       <svg
            width={props.size + padding * 2}
            height={props.size + padding * 2}
            overflow="visible"
            >
            <polyline
                points={`${padding} ${props.size + padding} ${padding} ${padding} ${props.size + padding} ${padding}`}
                stroke={props.color}
                strokeWidth={props.thickness}
                strokeLinecap="round"
                fill="none"
                strokeLinejoin="round"
            />
            </svg>
      </Box>
        {props.child}
      <Box position={"absolute"} right="0" bottom="0">
        <svg width={props.size} height={props.size} overflow="visible">
            <polyline
                points={`${padding} ${props.size + padding} ${props.size + padding} ${props.size + padding} ${props.size + padding} ${padding}`}
                stroke={props.color}
                strokeWidth={props.thickness}
                strokeLinecap="round"
                fill="none"
                strokeLinejoin="round"
            />
        </svg>
      </Box>

    </Box>
  );
};

