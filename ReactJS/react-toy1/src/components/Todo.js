import React from 'react';
import { useState } from 'react';

function Todo({style}) {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == "") return;
    setToDos(currentArr => [toDo, ...currentArr]);
    setToDo("");
  };

  console.log(toDos);
  return (
    <div style={style}>
      <h1>TODO 👩🏻‍💻</h1>
      <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={toDo}
        type='text'
        placeholder='Write your to do....' />
      <button>Add To Do</button>
      </form>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  );
}


export default Todo;