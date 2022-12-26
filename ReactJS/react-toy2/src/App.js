import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width:100vw;
  justify-content: center;
  align-items: center;
  /* theme에 접근이 가능하다. */
  background-color: ${(props)=>props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props)=>props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>HELLO</Title>
    </Wrapper>
  );
}

export default App;