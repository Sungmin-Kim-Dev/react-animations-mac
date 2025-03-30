import styled from "styled-components";
import {motion, Variants} from "motion/react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  hover: {scale: 1.5, rotateZ: 90},
  click: {scale: 1, borderRadius: "50%"},
  drag: {
    backgroundColor: "rgb(46, 204, 113)",
    transition: {
      duration: 1,
    },
  },
};

const App = () => {
  return (
    <Wrapper>
      <Box drag variants={boxVariants} whileDrag="drag" whileHover="hover" whileTap="click" />
    </Wrapper>
  );
};

export default App;
