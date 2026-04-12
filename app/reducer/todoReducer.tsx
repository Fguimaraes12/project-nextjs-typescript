import { type todo } from "../hooks/useTodo";

export const initialState: State = {
  todos: [],
};

export type State = {
  todos: todo[];
};

export type Actions =
  | { type: "SET_TODOS"; payload: todo[] }
  | { type: "ADD_TODO"; payload: todo }
  | { type: "DELETE_TODO"; payload: number };

export const todoReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((p) => p.id !== action.payload),
      };

    default:
      return state;
  }
};
