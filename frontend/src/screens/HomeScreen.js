import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const todoItems = await fetch(`${process.env.REACT_APP_API_URL}/todos`);
      const jsonData = await todoItems.json();
      setTodos(jsonData);
    } catch (e) {
      console.error('Database query failed');
      return null;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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
          {todos.map((todoItem) => (
            <tr key={todoItem._id}>
              <td>edit</td>
              <td>{todoItem.title}</td>
              <td>{todoItem.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button">+</button>
    </div>
  );
};

export default HomeScreen;
