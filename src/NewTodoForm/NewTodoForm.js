import useFormInput from '../hooks/useFormInput';
import './NewTodoForm.css';

const NewTodoForm = props => {
  const [task, changeTask, resetTask] = useFormInput('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (task !== '') {
      props.submit(task);
      resetTask();
    }
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label className="NewTodoForm-label" htmlFor="task">
        New Todo
      </label>
      <span className="">
        <input
          className="NewTodoForm-input-and-button NewTodoForm-input"
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={changeTask}
          minLength={0}
          maxLength={27}
        />
        <button
          className="NewTodoForm-button NewTodoForm-input-and-button"
          type="submit"
        >
          Add Todo
        </button>
      </span>
    </form>
  );
};

export default NewTodoForm;
