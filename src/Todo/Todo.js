import './Todo.css';

const Todo = props => {
  const handleClick = fn => () => {
    fn(props.id);
  };

  return (
    <article className="Todo">
      <p className="Todo-task">{props.task}</p>
      <span className="Todo-buttons">
        <button
          className="Todo-edit"
          aria-label="Edit"
          onClick={handleClick(props.edit)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="Todo-close"
          aria-label="Close"
          onClick={handleClick(props.close)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </span>
    </article>
  );
};

export default Todo;
