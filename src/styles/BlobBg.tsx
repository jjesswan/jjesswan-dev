import { Box } from "@chakra-ui/react";

interface AnimationProps {
    color: string;
    w: number;
    h: number;
    shift33: Array<number>;
    shift66: Array<number>;
    translate33: Array<number>;
    translate66: Array<number>;
    mt: string;
    ml: string;
}

export default function BlobBackground(props: AnimationProps) {
  function makeKeyframes() {
    const css = `
      @keyframes blob-drift {
        0%, 100% {
          transform: translate(0, 0) scale(1);
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%;
        }
        33% {
          transform: translate(${props.translate33[0]}px, ${props.translate33[1]}px) scale(1.1);
          border-radius: ${props.shift33[0]}% ${props.shift33[1]}% ${props.shift33[2]}% ${props.shift33[3]}% / ${props.shift33[1]}% ${props.shift33[0]}% ${props.shift33[3]}% ${props.shift33[2]}%;
        }
        66% {
          transform: translate(${props.translate66[0]}px, ${props.translate66[1]}px) scale(0.9);
          border-radius: ${props.shift66[0]}% ${props.shift66[1]}% ${props.shift66[2]}% ${props.shift66[3]}% / ${props.shift66[1]}% ${props.shift66[0]}% ${props.shift66[3]}% ${props.shift66[2]}%;
        }
      }
    `;
    return { name: "blob-drift", css };
  }

    const { name, css } = makeKeyframes();


  return (
    <>
      <style>{css}</style>
      <Box width={"100%"} height={"100%"} position="absolute" overflow="hidden" display={"flex"} zIndex={-1}>
        <div style={{ position: "absolute", inset: 0, filter: `blur(100px)`, pointerEvents: "none" }}>
          <div style={{ 
            animation: `${name} 7s ease-in-out infinite`,
            background: props.color,
            width: props.w,
            height: props.h, 
            marginTop: `${props.mt}`,
            marginLeft: `${props.ml}`,
            }} />
        </div>
      </Box>
    </>
  );
}
