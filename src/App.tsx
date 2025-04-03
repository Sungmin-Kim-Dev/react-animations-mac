import styled from "styled-components";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex-wrap: wrap; */
  /* gap: 5rem; */
  justify-content: space-around;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 0.5rem;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  /* width: 100px; */
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  border-radius: 2rem;
  border: 1px solid black;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  console.log(clicked);

  return (
    <Wrapper onClick={toggleClicked}>
      <Grid>
        <Box></Box>
        <Box></Box>
        <Box layoutId="hello"></Box>
        <Box></Box>
      </Grid>
      <AnimatePresence>
        {clicked && (
          <Overlay
            initial={{backgroundColor: "rgba(0, 0, 0, 0)"}}
            animate={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
            exit={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
            <Box layoutId="hello" style={{width: "200px", height: "100px"}}></Box>
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default App;
