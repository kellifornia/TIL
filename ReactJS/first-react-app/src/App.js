import React from 'react';
import Home from './components/Home';
import Todo from './components/Todo';
import CoinTracker from './components/CoinTracker';
import Movies from './components/Movies';
import Detail from './routes/Detail';
import styled from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path='/movie/:id' element={<Detail />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/coin' element={<CoinTracker />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
