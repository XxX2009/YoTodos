const API_URL = 'http://localhost:3001/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};