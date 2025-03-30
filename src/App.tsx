import styled from "styled-components";
import {motion, Variants} from "motion/react";
import {useRef} from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  /* place-self: center; */
  border-radius: 3rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  hover: {scale: 1, rotateZ: 90},
  click: {scale: 1, borderRadius: "50%"},
  drag: {
    backgroundColor: "rgb(46, 204, 113)",
    transition: {
      duration: 1,
    },
  },
};

const App = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box drag dragSnapToOrigin dragElastic={0.7} dragConstraints={biggerBoxRef} variants={boxVariants} whileDrag="drag" whileHover="hover" whileTap="click" />
      </BiggerBox>
    </Wrapper>
  );
};

export default App;
