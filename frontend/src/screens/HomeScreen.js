import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Todo from '../components/Todo';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const { getAccessTokenSilently } = useAuth0;

  const fetchTodos = async () => {
    try {
      const token = await getAccessTokenSilently();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const todoItems = await fetch(`${process.env.REACT_APP_API_URL}/api/todos`, config);
      const jsonData = await todoItems.json();

      setTodos(jsonData);
    } catch (e) {
      console.error('Database query failed');
      return null;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const handleDelete = async (todo) => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/todos/${todo}`, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Todo</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todoItem) => (
            <tr key={todoItem._id}>
              <Todo todoItem={todoItem} handleDelete={handleDelete} />
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button">+</button>
    </div>
  );
};

export default HomeScreen;
