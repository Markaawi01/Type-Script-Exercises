import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      task: "Learn TypeScript",
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.done ? "Done" : "Not Done"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;