import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoForm = () => {
  //Write a code here as needed
  return (
    <form>
      <input type='text' placeholder='Add a task...' />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoForm;
