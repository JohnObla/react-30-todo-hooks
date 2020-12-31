import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => setTodos([...todos, { task, id: uuidv4() }]);

  const editTodo = (id, task) => {
    // settodos(
    //   todos.map(t => {
    //     if (t.id === id) return t;
    //     return { ...t, task };
    //   })
    // );
  };

  const closeTodo = id => setTodos(todos.filter(t => t.id !== id));

  return (
    <main>
      <h1>Todo List</h1>
      <section>
        {todos.map(t => (
          <Todo
            key={t.id}
            id={t.id}
            task={t.task}
            edit={editTodo}
            close={closeTodo}
          />
        ))}
      </section>
      <NewTodoForm submit={addTodo} />
    </main>
  );
};

export default TodoList;
