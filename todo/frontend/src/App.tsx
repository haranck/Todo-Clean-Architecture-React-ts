import{ useEffect, useState } from "react";
import { fetchTodos, createTodo, deleteTodo } from "./api";
import type { Todo } from "./api";
import type { FormEvent } from "react";


const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = await createTodo(title.trim());
    setTodos((prev) => [newTodo, ...prev]);
    setTitle("");
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit} >
        <input
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {loading && <p>Loading...</p>}

      <ul >
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
        {!loading && todos.length === 0 && <p>No todos yet</p>}
      </ul>
    </div>
  );
};

export default App;
