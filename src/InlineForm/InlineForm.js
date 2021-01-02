import React from 'react';
import useFormInput from '../hooks/useFormInput';
import '../Todo/Todo.css';
import './InlineForm.css';

const InlineForm = props => {
  const [task, changeTask, resetTask] = useFormInput(props.task);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (task !== '') {
      props.submit(props.id, task);
      resetTask();
    }
  };

  const handleCancel = () => {
    props.cancel(props.id);
  };

  return (
    <form className="Todo" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="edit-task">
        Edit Task
      </label>
      <input
        className="InlineForm-input"
        type="text"
        id="edit-task"
        name="task"
        value={task}
        onChange={changeTask}
      />
      <span className="Todo-buttons">
        <button className="Todo-edit" type="submit" aria-label="Submit Edit">
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={handleCancel}
          type="button"
          className="Todo-close"
          aria-label="Cancel Edit"
        >
          <i className="fas fa-times"></i>
        </button>
      </span>
    </form>
  );
};

export default InlineForm;
