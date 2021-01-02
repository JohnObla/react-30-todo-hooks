import useFormInput from '../hooks/useFormInput';
import './Todo.css';

const Todo = props => {
  const handleClick = fn => () => {
    fn(props.id);
  };

  const handleCheck = evt => {
    props.toggleIsDone(props.id);
  };

  return (
    <article className="Todo">
      <p className="Todo-task">
        {props.task}
        <span>
          <label className="visually-hidden" htmlFor={props.id}>
            Mark as done
          </label>
          <input
            onChange={handleCheck}
            type="checkbox"
            id={props.id}
            name={'isDone'}
            checked={props.isDone}
          />
        </span>
      </p>
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
