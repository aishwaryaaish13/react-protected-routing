import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Todos</h2>
      <button onClick={handleLogout}>Logout</button>

      <div className="todo-list">
        {todos.map((todo) => (
          <Link key={todo.id} to={`/todos/${todo.id}`} className="todo-card">
            <h4>{todo.title}</h4>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;
