import React from 'react';
import Todo from './components/Todo';
import CoinTracker from './components/CoinTracker';
import Movies from './components/Movies';
import styled from './App.module.css'

function App() {
  return (
    <div>
      <Movies />
      <Todo style={{backgroundColor: "#eee"}}/>
      <CoinTracker />
    </div>
  );
}

export default App;
