import './Todo.css';

const Todo = props => {
  const handleClick = fn => () => {
    fn(props.id);
  };

  return (
    <article className="Todo">
      <p className="Todo-task">{props.task}</p>
      <span className="Todo-buttons">
        <button className="Todo-edit" onClick={handleClick(props.edit)}>
          Edit
        </button>
        <button
          className="Todo-close"
          aria-label="Close"
          onClick={handleClick(props.close)}
        >
          X
        </button>
      </span>
    </article>
  );
};

export default Todo;
