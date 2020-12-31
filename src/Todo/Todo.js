const Todo = props => {
  const handleClick = fn => evt => {
    fn(props.id);
  };

  return (
    <article>
      <p>{props.task}</p>
      <button onClick={handleClick(props.edit)}>Edit</button>
      <button aria-label="Close" onClick={handleClick(props.close)}>
        X
      </button>
    </article>
  );
};

export default Todo;
