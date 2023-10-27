import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      dispatch(addTodo(taskText));
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a task...'
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoForm;
