import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from '../hooks/useLocalStorageState';

const useTodoState = (initialTodos = []) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    addTodo: task =>
      setTodos([
        ...todos,
        { task, id: uuidv4(), isEditing: false, isDone: false },
      ]),

    editTodo: id => {
      setTodos(
        todos.map(t => {
          if (t.id !== id) return { ...t, isEditing: false };
          return { ...t, isEditing: true };
        })
      );
    },

    submitEdit: (id, task) => {
      setTodos(
        todos.map(t => {
          if (t.id !== id) return t;
          return { ...t, task, isEditing: false };
        })
      );
    },

    cancelEdit: id => {
      setTodos(
        todos.map(t => {
          if (t.id !== id) return t;
          return { ...t, isEditing: false };
        })
      );
    },

    toggleIsDone: id => {
      setTodos(
        todos.map(t => {
          if (t.id !== id) return t;
          return { ...t, isDone: !t.isDone };
        })
      );
    },

    closeTodo: id => setTodos(todos.filter(t => t.id !== id)),
  };
};

export default useTodoState;
