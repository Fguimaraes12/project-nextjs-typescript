"use client";

import { useEffect, useState } from "react";
import { api } from "../lib/api/todo";

type todo = {
  id: number;
  userId: number;
  todo: string;
  completed: boolean;
};

type todoPromise = {
  todos: todo[];
};

function useTodos() {
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    async function getTodo() {
      try {
        const { data } = await api.get<todoPromise>("/todos");
        setTodos(data.todos);
      } catch (error) {
        console.log(error);
      }
    }

    getTodo();
  }, []);
  return { todos };
}

export default useTodos;
