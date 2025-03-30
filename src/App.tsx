import styled from "styled-components";
import {motion, useMotionValue, useMotionValueEvent} from "motion/react";

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
  /* place-self: center; */
  border-radius: 3rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const App = () => {
  const x = useMotionValue(0);
  console.log(x);
  useMotionValueEvent(x, "change", (l) => {
    console.log(l);
  });

  return (
    <Wrapper>
      <button onClick={() => x.set(100)}>Click me</button>
      <Box style={{x}} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
};

export default App;
