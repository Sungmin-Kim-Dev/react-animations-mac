import styled from "styled-components";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  align-content: center;
  text-align: center;
  border-radius: 2rem;
  font-size: 3rem;
  position: absolute;
  top: 5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVariant = {
  entry: (back: boolean) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.3,
    },
  }),
};

const App = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence mode="sync" custom={back}>
        <Box custom={back} variants={boxVariant} initial="entry" animate="center" exit="exit" key={visible}>
          {visible}
        </Box>
      </AnimatePresence>
      <div style={{display: "flex", gap: "2rem"}}>
        <button onClick={prevPlease}>Previous</button>
        <button onClick={nextPlease}>Next</button>
      </div>
    </Wrapper>
  );
};

export default App;
