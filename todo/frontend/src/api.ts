export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

const BASE_URL = "http://localhost:4000/api/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createTodo = async (title: string): Promise<Todo> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

console.log('helloo')

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
