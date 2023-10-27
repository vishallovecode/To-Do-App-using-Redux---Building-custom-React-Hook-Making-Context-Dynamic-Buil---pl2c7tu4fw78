import React from 'react';
import ToDoForm from '../components/TodoForm';
import ToDoList from '../components/TodoList';

const HomePage = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default HomePage;
