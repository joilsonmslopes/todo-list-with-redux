import { TodoItem, TodosTypes } from "./types";

export const getAllTodosRequest = () => {
  return {
    type: TodosTypes.GET_TODOS_REQUEST,
  };
};

export const getAllTodosSuccess = (todos: TodoItem[]) => {
  return {
    type: TodosTypes.GET_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
};

export const getAllTodosFailure = () => {
  return {
    type: TodosTypes.GET_TODOS_FAILURE,
  };
};

export const addTodoRequest = (todo: TodoItem) => {
  return {
    type: TodosTypes.ADD_TODO_REQUEST,
    payload: {
      todo,
    },
  };
};

export const addTodoSuccess = (todo: TodoItem) => {
  return {
    type: TodosTypes.ADD_TODO_SUCCESS,
    payload: {
      todo,
    },
  };
};

export const addTodoFailure = () => {
  return {
    type: TodosTypes.ADD_TODO_FAILURE,
  };
};

export const updateTodoRequest = (todo: TodoItem) => {
  return {
    type: TodosTypes.UPDATE_TODO_REQUEST,
    payload: {
      todo,
    },
  };
};

export const updateTodoSuccess = (todos: TodoItem[]) => {
  return {
    type: TodosTypes.UPDATE_TODO_SUCCESS,
    payload: {
      todos,
    },
  };
};

export const updateTodoFailure = () => {
  return {
    type: TodosTypes.UPDATE_TODO_FAILURE,
  };
};

export const deleteTodoRequest = (todoId: string) => {
  return {
    type: TodosTypes.DELETE_TODO_REQUEST,
    payload: {
      todoId,
    },
  };
};

export const deleteTodoSuccess = (todos: TodoItem[]) => {
  return {
    type: TodosTypes.DELETE_TODO_SUCCESS,
    payload: {
      todos,
    },
  };
};

export const deleteTodoFailure = () => {
  return {
    type: TodosTypes.DELETE_TODO_FAILURE,
  };
};
