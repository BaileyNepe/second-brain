const Todo = ({ handleDelete, todoItem }) => {
  return (
    <>
      <td>
        <button onClick={() => handleDelete(todoItem._id)}>-</button>
      </td>
      <td>{todoItem.title}</td>
      <td>{todoItem.description}</td>
    </>
  );
};

export default Todo;
