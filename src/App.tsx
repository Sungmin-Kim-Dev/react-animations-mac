import styled from "styled-components";
import {motion, useMotionValue, useMotionValueEvent, useScroll, useTransform} from "motion/react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  /* place-self: center; */
  border-radius: 3rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const App = () => {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-250, 250], [-360, 360]);
  const gradient = useTransform(
    x,
    [-250, 0, 250],
    [
      "linear-gradient(135deg, rgb(0, 214, 238), rgb(8, 0, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 91), rgb(234, 238, 0))",
    ]
  );

  const {scrollYProgress} = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll Progress: ", latest);
  });
  useMotionValueEvent(rotateZ, "change", (l) => {
    console.log("dragX:", l);
  });

  return (
    <Wrapper style={{background: gradient}}>
      <Box style={{x, rotateZ, scale}} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
};

export default App;
