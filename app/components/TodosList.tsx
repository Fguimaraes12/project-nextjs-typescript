"use client";

import useTodos from "../hooks/useTodo";

function TodosList() {
  const { todos } = useTodos();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h1 className="">{todo.todo}</h1>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodosList;
