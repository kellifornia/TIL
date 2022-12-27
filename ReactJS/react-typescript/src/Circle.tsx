import styled from 'styled-components';

// [2]Container의 props 타입을 지정하는 방법
interface ContainerProps {
  bgColor: string;
};

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
`;

interface  CircleProps {
  bgColor: string;
}

// [1]Circle의 props 타입은 CircleProps이라고 알려주는 것!
function Circle({bgColor}: CircleProps){
  return <Container bgColor={bgColor}/>
}





export default Circle;