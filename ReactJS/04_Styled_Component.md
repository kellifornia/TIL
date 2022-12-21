# The Basic of React
> 노마드코더 React master 강의

> [styled-components Docs](https://styled-components.com)


이전까지 style을 사용하기 위해서 아래 방법들을 사용했었다.
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
// [1]css파일 자체를 import하여 컴포넌트 전체에 해당 css가 적용되도록 함
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
```

```javascript
function App() {
  return (
    // [2]직접 스타일 속성을 나열하는 방법
    <div style={{display: "flex"}}>
      <div style={{backgroundColor: "teal", width:100, height:100}}></div>
      <div style={{backgroundColor: "tomato", width:100, height:100}}></div>
    </div>
  );
}

export default App;
```
이외에 직접 class를 넣어주는 방법 등 여러 방법이 존재하지만 과연 이것이 최선일까...?

## styled-components💎
styled-components를 설치하자!

```shell
npm install --save styled-components
```

### styled-components 사용하기

이전에 작성했던 App컴포넌트를 `styled-components`를 사용하도록 해보자!

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box01 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Box02 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box01 />
      <Box02 />
    </Father>
  );
}

export default App;
```
보는 것처럼 **태그에 직접 스타일을 넣어줄 필요가 없고 기존 css문법 그대로 사용이 가능하다. 또한 재사용도 가능**하다!@_@!! 

태그 상에 스타일이나 클래스명을 지정하지 않아도 된다. 웹에서 찍어보면 `styled-components`는 임의의 클래스명을 만들어서 element를 그려주고 있는 것으로 보인다.
![styled-components_class_render](./images/styled-components_class_render.png)


### Adapting and Extending

이전에 작성한 코드를 보면 `Box01`, `Box02`는 배경색만 빼고 동일한 스타일 속성을 가지고 있는데, 이를 꼭 따로 정의해야할까? 공통인 부분은 따로 뺼 수 있는 방법이 없을까?

`Props`를 이용해보자!

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal"/>
      <Box bgColor="tomato"/>
    </Father>
  );
}

export default App;
```

아래 스타일 속성들은 크기, 배경색 등 스타일이 같은데, border-radius 떄문에 따로 Circle을 정의하고 있다.

```javascript
const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
```

styled-components는 `상속(확장)`을 지원한다.

```javascript
const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;
```