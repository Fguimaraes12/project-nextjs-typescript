"use client";

import { useEffect, useState } from "react";
import { api } from "../lib/api/todo";

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodo() {
      try {
        const { data } = await api.get("/todos");
        console.log(data.todos);
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    }

    getTodo();
  }, []);
  return { todos };
}

export default useTodos;
