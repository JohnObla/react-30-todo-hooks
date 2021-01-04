import { useTransition, animated, config } from 'react-spring';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import InlineForm from '../InlineForm/InlineForm';
import useTodoState from '../hooks/useTodoState';
import './TodoList.css';

const TodoList = () => {
  const {
    todos,
    addTodo,
    editTodo,
    submitEdit,
    cancelEdit,
    toggleIsDone,
    closeTodo,
  } = useTodoState();

  const sortDone = (el1, el2) => {
    if (el1.isDone === el2.isDone) return 0;
    if (!el1.isDone && el2.isDone) return -1;
    if (el1.isDone && !el2.isDone) return 1;

    throw new Error(
      `Invalid value for is done. Element 1: ${el1} Element 2: ${el2}`
    );
  };

  const sortTransition = (el1, el2) => sortDone(el1.item, el2.item);

  const transitions = useTransition(todos, todo => todo.id, {
    from: { transform: 'translate(0, 4rem)' },
    enter: { transform: 'translate(0, 0)', height: '3rem', opacity: 1 },
    leave: { height: '0rem', opacity: 0 },
    config: config.default,
  });

  return (
    <main className="TodoList">
      <div className="TodoList-headers">
        <h1 className="TodoList-main-header">To-do List</h1>
        <h5 className="TodoList-sub-header">A Simple React Hooks Todo App</h5>
      </div>
      <section className="TodoList-todos">
        {[...transitions]
          .sort(sortTransition)
          .map(({ item: t, key, props }) => {
            if (t.isEditing) {
              return (
                <animated.div key={key} style={props}>
                  <InlineForm
                    key={t.id}
                    id={t.id}
                    task={t.task}
                    submit={submitEdit}
                    cancel={cancelEdit}
                  />
                </animated.div>
              );
            }

            return (
              <animated.div key={key} style={props}>
                <Todo
                  key={t.id}
                  id={t.id}
                  task={t.task}
                  isDone={t.isDone}
                  toggleIsDone={toggleIsDone}
                  edit={editTodo}
                  close={closeTodo}
                />
              </animated.div>
            );
          })}
      </section>
      <NewTodoForm submit={addTodo} />
    </main>
  );
};

export default TodoList;
