import useFormInput from '../hooks/useFormInput';

const NewTodoForm = props => {
  const [task, changeTask, resetTask] = useFormInput('');

  const handleSubmit = evt => {
    evt.preventDefault();
    props.submit(task);
    resetTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="task">New Task</label>
      <input
        type="text"
        id="task"
        name="task"
        value={task}
        onChange={changeTask}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodoForm;
