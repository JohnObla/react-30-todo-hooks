import React from 'react';
import useFormInput from '../hooks/useFormInput';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor={props.id}>Edit Task</label>
      <input
        type="text"
        id={props.id}
        name="task"
        value={task}
        onChange={changeTask}
      />
      <span className="">
        <button type="submit" aria-label="Submit Edit">
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={handleCancel}
          type="button"
          className=""
          aria-label="Cancel Edit"
        >
          <i className="fas fa-times"></i>
        </button>
      </span>
    </form>
  );
};

export default InlineForm;
