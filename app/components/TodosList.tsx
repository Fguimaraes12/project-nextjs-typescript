"use client";

import useTodos from "../hooks/useTodo";

function TodosList() {
  const { state } = useTodos();

  return (
    <div>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.userId}</span>
            <h1 className="">{todo.todo}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodosList;
