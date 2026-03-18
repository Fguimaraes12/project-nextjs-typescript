"use client";

import useTodos from "../hooks/useTodo";

function TodosList() {
  const { todos } = useTodos();

  return (
    <div>
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
}
export default TodosList;
