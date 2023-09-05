import { TodoItem } from "../store/ducks/todos/types";
import api from "./api";

export const todosService = {
  getAllTodos: async () => {
    return await api.get("todos");
  },
  createNewTodo: async (todo: TodoItem) => {
    return await api.post("todos", {
      ...todo,
    });
  },
  updateTodoById: async (todo: TodoItem) => {
    return await api.put(`todos/${todo.id}`, {
      ...todo,
    });
  },
  deleteTodoById: async (todoId: string) => {
    return await api.delete(`todos/${todoId}`);
  },
};
