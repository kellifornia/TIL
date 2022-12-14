import React from 'react';
import Button from './Button';
import styled from './App.module.css'

function App() {
  return (
    <div>
      <h1 className={styled.title}>Hello! this is my first react app!</h1>
      <Button text={11}/>
    </div>
  );
}

export default App;
