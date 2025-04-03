import styled from "styled-components";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  border-radius: 2rem;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 50px;
  height: 50px;
  /* border-radius: 50%; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const App = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{!clicked && <Circle layoutId="circle" style={{borderRadius: "50%", scale: 1.5}} />}</Box>
      <Box>{clicked && <Circle layoutId="circle" style={{borderRadius: 0}} />}</Box>
    </Wrapper>
  );
};

export default App;
