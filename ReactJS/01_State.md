# The Basic of React
> 노마드코더 React Basic 강의

## 1.why React?

클릭버튼을 누르면 화면에 클릭수가 표시되는 기능을 vaniila로 작성해보자.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <span>Total clicks: 0</span>
  <button id="btn" >Click me!</button>
</body>
<script>
  let counter = 0;
  const button = document.getElementById('btn');
  const span = document.querySelector('span');
  function handleClick() {
    counter += 1;
    span.innerText = `Total clicks: ${counter}`;
  }
  button.addEventListener('click', handleClick);
</script>
</html>
```
위 코드를 만들기까지 많은 작업이 필요하다.
(1)HTML 객체를 생성한다. 
(2)Javascript에서 해당 객체를 가져온다.
(3)click이벤트를 감지하고
(4)화면과 데이터를 갱신한다.
화면에서 특정 기능을 구현하기 위해서 매번 (1)~(4)를 반복하지 않을 방법이 없을까?

### React를 활용해서 위 코드를 바꿔보자!
`react`는 html객체를 생성하는 일종의 엔진역할을 하는 라이브러리이고 `react-dom`은 react로 생성된 element를 실제 화면상(html)에 뿌려주는 역할을 한다.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script>
  const app = document.getElementById("app");
  const span = React.createElement("span",
    {
      id: "s-span",
      onMouseEnter: () => console.log("mouse enter"),
    },
    "hello I'm span");

  const btn = React.createElement(
    "button",
    {
      style: { backgroundColor: "tomato" },
      onClick: () => console.log('hi'),
    },
    "Click me!");
  const container = React.createElement("div", null, [span, btn]);
  ReactDOM.createRoot(app).render(container);
</script>
</html>
```
- vanilla에서는 html을 먼저 만들고 javascript로 해당 객체를 가져와서 html을 갱신하는 순서로 작업이 이뤄진다.(html -> javascript)
- 반면, react의 경우 위 코드처럼 react javascript 자체에서 객체를 만든 뒤에 html을 만들어 뿌려준다. 즉, react에서 element를 잡고 있기때문에 업데이트가 필요한 시점에 react가 해당 객체만 업데이트 할 수 있다는 것을 의미한다.(React: javascript -> html)


### 더 쉬운 방법 사용하기: JSX와 Babel
> `JSX`를 사용하면 기존에 사용하던 html문법으로 객체를 생성할 수 있다. 그러나 이것을 React가 이해할 수 있는 코드로 변환하기 위해서는 `Babel`의 도움이 필요하다!
> 
> **JSX**
> ```html
>  const btn = React.createElement(
>    "button",
>    {
>      style: { backgroundColor: "tomato" },
>      onClick: () => console.log('hi'),
>    },
>    "Click me!");
>```
> **React**
> ```html
>  const btn = React.createElement(
>    "button",
>    {
>      style: { backgroundColor: "tomato" },
>      onClick: () => console.log('hi'),
>    },
>    "Click me!");
>```

```html
<body>
  <div id="app"></div>
</body>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<!-- Load Babel -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel" >
  // JSX를 이용한 element 생성!
  const Title = (
    <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Title</h3>
  );
  const Button = (
    <button
      style={{ backgroundColor: "tomato" }}
      onClick={() => console.log("I'm click!")}
    >"Click me!"
    </button>
  );

  const container = React.createElement("div", null, [Title, Button]);

  const app = document.getElementById("app");
  ReactDOM.createRoot(app).render(container);
</script>
```

위 코드를 더 간결하게 태그형식으로 바꿔보자! 

```html
<script type="text/babel" >
  // 즉시실행함수로 JSX를 반환
  const Title = () => (
    <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Title</h3>
  );
  // 즉시실행함수로 JSX를 반환
  const Button = () => (
    <button
      style={{ backgroundColor: "tomato" }}
      onClick={() => console.log("I'm click!")}
    >"Click me!"
    </button>
  );
  // JSX를 이용해 객체를 생성하려면 첫글자는 대문자로 시작하는게 좋다. 소문자로 시작하는 경우, <button/>이 일반 html태그인지 JSX객체인지 파악이 어렵다.
  const Container = (
    <div>
      <Title/>
      <Button/>
    </div>
    );

  const app = document.getElementById("app");
  ReactDOM.createRoot(app).render(Container);

/* //Container를 즉시실생함수로 변경하면 render할때 태그형식으로 사용이 가능하다!
  const Container = () => (
    <div>
      <Title/>
      <Button/>
    </div>
    );

  const app = document.getElementById("app");
  ReactDOM.createRoot(app).render(<Container/>);

*/
</script>
```
`React`, `JSX`, `Babel`을 이용하여 html element를 생성하고 이벤트를 추가했는데, counter값 변경은 어떻게 구현해줘야 할까? vanilla처럼 각 객체에 설정된 이벤트에 동작 함수를 걸어야 하는 걸까? React State를 공부해보자!

## 2.Understanding React State!⭐️

counter변수를 추가한 모습이다. 이 코드를 화면에서 돌려보면 counter변수 값은 증가하는데, 화면 갱신이 일어나지 않는다.

```html
<body>
  <div id="app"></div>
</body>
<script type="text/babel">
  let counter = 0;
  function countUp(){
    counter = counter+1;
  }
  const Container = () => (
    <div>
      <span>Total clicks: {counter}</span>
      <button onClick={countUp}>Click me!</button>
    </div>
  );

  const app = document.getElementById("app");
  ReactDOM.createRoot(app).render(<Container />);

</script>
```
보는 것처럼 이 코드는 Container를 한번만 렌더링하고 리렌더링을 하는 부분이 없다. 그렇다면 countUp함수가 호출될때마다 Counter를 렌더링하려면 어떻게 해야될까?

```javascript
let counter = 0;
function countUp(){
  counter = counter+1;
  // 간단하게 counterUp함수가 호출될때마다 렌더링 시키기!
  ReactDOM.createRoot(app).render(<Container />);
}
const Container = () => (
  <div>
    <span>Total clicks: {counter}</span>
    <button onClick={countUp}>Click me!</button>
  </div>
);

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<Container />);
```
함수가 늘어날수록 위 코드는 비효율적이다! reRender함수를 만들어보자!

```javascript
const app = document.getElementById("app");
let counter = 0;

function countUp(){
  counter = counter+1;
  render();
}

// render 함수 추가!
function render(){
  ReactDOM.createRoot(app).render(<Container />);
}

const Container = () => (
  <div>
    <span>Total clicks: {counter}</span>
    <button onClick={countUp}>Click me!</button>
  </div>
);

render();
```
> react를 이용한 렌더링은 vanilla와 비교해서 어떤점이 좋을까? countUp함수가 호출되면 Container 전체가 리렌더링 될거 같지만, 변화가 필요한 부분인 counter변수만 갱신이 일어나는 걸 확인할 수 있다. 이게 바로 react의 강점이다!
> ![React Rendering](./images/React_Rendering.png)

사실 react에서는 이것보다 더 좋은 렌더링 방법이 존재한다.

### 2-1) setState : `useState`, react hook api

> `useState` : 상태 유지 값과 그 값을 갱신하는 함수를 반환한다.
> ```javascript
> const [상태값, 상태값을_갱신할_함수] = useState(초기값);
> 상태값을_갱신할_함수(갱신할_상태값);
> ```

```javascript
function App() {
  // 초기 counter상태값을 0으로 등록하고 갱신시, setCounter 함수를 사용한다.
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter+1);
  }
  return (
    <div>
      <div>Total clicks: {counter}</div>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
};

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<App />);
```

아래코드를 실행했을 때, console.log는 처음 랜더링했을 때만 실행될 것이라고 생각했다.

```javascript
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter+1);
  }
  console.log(counter);
  console.log("rerender");
  return (
    <div>
      <div>Total clicks: {counter}</div>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
};
```
![React useState](./images/React_useState.png)

#### 🙄😨🧐🙄
그러나 실제 counter가 변경되는 이벤트(onClick) 됐을때마다 console.log 함수가 실행됨을 확인할 수 있다. react는 어떻게 이게 가능할까? 심지어 화면은 counter변수만 갱신해줌ㄷㄷ
counter값이 바뀔때마다 App함수가 다시 렌더링된다..? **state값이 변경될 때마다 react는 컴포넌트 전체를 렌더링한 뒤, 이걸 실제 렌더트리와 비교해서 다른 부분만 바꿔주나?**
> setState가 호출될때마다(state변경시) 다시렌더하는 범위는 어떻게 되나..? 함수범위까지 인듯?

### 2-2) state funtions

setState로 현재 state 값을 기준으로 변경이 필요할 때는 state변수를 직접 사용하는 것보다 setStatus의 첫번째 인자는 state임을 이용하여 아래처럼 작성하는 것이 좋다.(예상치 못한 state 업데이트가 어딘가에서 일어났을 때, 혼동을 주는걸 방지할 수 있다.)
```javascript
const [state, setState] = React.useState(0);
const onClick = () => {
  // setCounter(state+1);
  setCounter((currnetState) => currnetState+1);
}
```

아래코드의 문제점은 뭘까?
```javascript
function App() {
  return (
    <div>
      <h1>Super Converter</h1>
      <label for="minutes">Minutes</label>
      <input id="minutes" type="number" placeholder="Minutes"></input>
      <label for="hours">Hours</label>
      <input id="hours" type="number" placeholder="Hours"></input>
    </div>
  )
```
![JSX](./images/React_JSX.png)

이 코드의 문제점은 'for'이다. App함수의 return문은 `JSX`를 쓰고 있다. 즉, 일반적인 html문법이 아니다!. 'for', 'class' 등은 자바스크립트에서 이미 선점된 언어이다.
즉, `JSX`에 맞는 문법을 사용해야한다.
```javascript
function App() {
  return (
    <div>
      <h1>Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input id="minutes" type="number" placeholder="Minutes"></input>
      <label htmlFor="hours">Hours</label>
      <input id="hours" type="number" placeholder="Hours"></input>
    </div>
  )
```

#### [실습1] minutes&hours converter 구현해보기
- minutes <-> hours 양방향 전환
- reset 버튼
- minutes 입력중에는 hours 입력불가(disabled) : flipped 버튼

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app"></div>
</body>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<!-- Load Babel -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">

  function App() {
    const [amount, setAmount] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);

    const onChange = ({ target }) => {
      setAmount(target.value);
    };

    const onFlipp = () => {
      reset();
      setFlipped(current => !current);
    }
    const reset = () => setAmount(0);
    return (
      <div>
        <h1>Super Converter</h1>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <input
            value={flipped ? amount * 60 : amount}
            onChange={onChange}
            disabled={flipped}
            id="minutes"
            type="number"
            placeholder="Minutes"></input>
        </div>
        <div>
          <label htmlFor="hours">Hours</label>
          <input
            value={flipped ? amount : amount / 60}
            onChange={onChange}
            disabled={!flipped}
            id="hours"
            type="number"
            placeholder="Hours"></input>
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlipp}>Flipped</button>
      </div>
    )
  };

  const app = document.getElementById("app");
  ReactDOM.createRoot(app).render(<App />);

</script>
</html>
```

> #### [Question]
> - [테스트코드](./Code/01_State/setState.html)
> 
> 강의를 듣기전에 먼저 코드를 짜보면서 **setState의 동작**과 **rerender가 일어나는 과정**에 궁금증이 생겼다.
> 
> [1] 먼저 setState에 값을 넣는 경우 state는 그 값으로 갱시되고 rerender가 일어난다.
> ```javascript
> const [minutes, setMinutes] = React.useState(0);
> setMinutes(minutes+1); // minutes = minutes+1;
>```
> 
> [2] setState 인자에 함수를 전달하는 경우, 해당 함수의 실행 결과가 state값이 된다. 또한 인자로 전달된 함수에 매게변수가 있다면, setState는 해당함수의 매개변수로 state값을 사용하는 걸로 보인다.
> 
> ```javascript
> const [minutes, setMinutes] = React.useState(0);
> const argvFn = (a) => a+1;
> setMinutes(argvFn); // minutes = argvFn(minutes);
>```
>
> [3] rerender가 일어나는 건 setState가 실행될때(즉, state값이 변경됐을 때!) 리엑트가 가상DOM을 그리는 것으로 이해했는데... 왜 아래처럼 setState를 두번 호출했는데, conole.log가 한번만 찍히는가? 이벤트 단위로 rerender...?
> (이 코드가 이해가 안간다면 [여기](#2-2-state-funtions))
> 
> ```javascript
> const onChange = ({ target }) => {
>   const { id, value } = target
>   if (id === "minutes") {
>     setMinutes(value);
>     setHours(value / 60);
>   }
>}
> console.log('log!');
>```
> 
> #### [answer]
> 리엑트의 setState는 비동기로 실행되며, setState를 연속으로 호출하면 모두 취합(batch)한 뒤에 한번에 렌더링을 진행한다. 그러면 100번의 상태값변경이 있어도 한 번의 렌더링으로 최신 상태를 유지할 수 있다.
> [📌 setState가 비동기인 이유](https://velog.io/@zuzokim/React-setState%EA%B0%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%9D%B8-%EC%9D%B4%EC%9C%A0)
> [📌 state 갱신할 때, setState를 써야하는 이유](https://leehwarang.github.io/2020/07/28/setState.html)


### 2-3) Challenge!
JSX와 setState를 활용하여 앞서 작성한 [minutes&time Converter](./Code/01_State/setState.html)를 컴포넌트 단위로 개선해보자!

- [컴포넌트로 쪼개기](./Code/01_State/challenge.html)