import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    try {
      const todos = await fetch("http://localhost:5000/api/todos");
      setTodos(todos);
    } catch (e) {
      console.error('Database query failed');
      return null;
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(todos)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Todo</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todoItem, index ) => (
            <tr key={index}>
              <td> edit</td>
              <td>{todoItem.title}</td>
              <td> description</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button">+</button>
    </div>
  );
};

export default HomeScreen;
