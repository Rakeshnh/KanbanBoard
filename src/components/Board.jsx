
import React, {useContext, useState} from 'react';
import { useBoard, BoardContext } from './BoardContext';
import Column from './Column';
import Trash from './Trash'

function TaskInput() {
  const {dispatch} = useContext(BoardContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    dispatch({type: 'ADD_TASK', payload: {text}});
    setText('');
  };

  return(
    <form className='task-form' onSubmit={handleSubmit}>
      <input type='text'
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Add new Task...'/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default function Board() {
  const { state } = useBoard();

  return (
    <div>
      <h1>KanBan Board</h1>
    <TaskInput/>
    <div className="board">
      {Object.values(state.columns).map((col) => (
        <Column key={col.id} column={col} />
      ))}
       <Trash/>
    </div>
   
    </div>
  );
}
