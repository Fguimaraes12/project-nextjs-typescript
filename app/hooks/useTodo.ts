"use client";

import { useEffect, useReducer, useState } from "react";
import { api } from "../lib/api/todo";
import { initialState, todoReducer } from "../reducer/todoReducer";

export type todo = {
  id: number;
  userId: number;
  todo: string;
  completed: boolean;
};

type todoPromise = {
  todos: todo[];
};
function useTodos() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    async function getTodo() {
      try {
        const { data } = await api.get<todoPromise>("/todos");
        dispatch({ type: "SET_TODOS", payload: data.todos });
      } catch (error) {
        console.log(error);
      }
    }

    getTodo();
  }, []);

  return { state };
}

export default useTodos;
