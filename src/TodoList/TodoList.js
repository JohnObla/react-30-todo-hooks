import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import InlineForm from '../InlineForm/InlineForm';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task =>
    setTodos([
      ...todos,
      { task, id: uuidv4(), isEditing: false, isDone: false },
    ]);

  const editTodo = id => {
    setTodos(
      todos.map(t => {
        if (t.id !== id) return { ...t, isEditing: false };
        return { ...t, isEditing: true };
      })
    );
  };

  const submitEdit = (id, task) => {
    setTodos(
      todos.map(t => {
        if (t.id !== id) return t;
        return { ...t, task, isEditing: false };
      })
    );
  };

  const cancelEdit = id => {
    setTodos(
      todos.map(t => {
        if (t.id !== id) return t;
        return { ...t, isEditing: false };
      })
    );
  };

  const toggleIsDone = id => {
    setTodos(
      todos.map(t => {
        if (t.id !== id) return t;
        return { ...t, isDone: !t.isDone };
      })
    );
  };

  const closeTodo = id => setTodos(todos.filter(t => t.id !== id));

  const sortDone = (el1, el2) => {
    if (el1.isDone === el2.isDone) return 0;
    if (!el1.isDone && el2.isDone) return -1;
    if (el1.isDone && !el2.isDone) return 1;

    throw new Error(
      `Invalid value for is done. Element 1: ${el1} Element 2: ${el2}`
    );
  };

  return (
    <main className="TodoList">
      <div className="TodoList-headers">
        <h1 className="TodoList-main-header">To-do List</h1>
        <h5 className="TodoList-sub-header">A Simple React Hooks Todo App</h5>
      </div>
      <section className="TodoList-todos">
        {[...todos].sort(sortDone).map(t => {
          if (t.isEditing) {
            return (
              <InlineForm
                key={t.id}
                id={t.id}
                task={t.task}
                submit={submitEdit}
                cancel={cancelEdit}
              />
            );
          }

          return (
            <Todo
              key={t.id}
              id={t.id}
              task={t.task}
              isDone={t.isDone}
              toggleIsDone={toggleIsDone}
              edit={editTodo}
              close={closeTodo}
            />
          );
        })}
      </section>
      <NewTodoForm submit={addTodo} />
    </main>
  );
};

export default TodoList;
