export enum TodosTypes {
  GET_TODOS_REQUEST = "@todos/GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS = "@todos/GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE = "@todos/GET_TODOS_FAILURE",
  ADD_TODO_REQUEST = "@todos/ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS = "@todos/ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE = "@todos/ADD_TODO_FAILURE",
  UPDATE_TODO_REQUEST = "@todos/UPDATE_TODO_REQUEST",
  UPDATE_TODO_SUCCESS = "@todos/UPDATE_TODO_SUCCESS",
  UPDATE_TODO_FAILURE = "@todos/UPDATE_TODO_FAILURE",
  DELETE_TODO_REQUEST = "@todos/DELETE_TODO_REQUEST",
  DELETE_TODO_SUCCESS = "@todos/DELETE_TODO_SUCCESS",
  DELETE_TODO_FAILURE = "@todos/DELETE_TODO_FAILURE",
}

export interface TodoItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TodosState {
  data: TodoItem[];
  loading: boolean;
  error: boolean;
}
