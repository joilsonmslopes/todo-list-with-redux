import { AxiosResponse } from "axios";
import { call, put, select } from "redux-saga/effects";
import { todosService } from "../../../services/todosService";
import { Action } from "../../../types/ActionTypes";
import {
  addTodoSuccess,
  deleteTodoFailure,
  deleteTodoSuccess,
  getAllTodosFailure,
  getAllTodosSuccess,
  updateTodoRequest,
  updateTodoSuccess,
} from "./actions";
import { TodoItem } from "./types";

export function* getAllTodosRequest() {
  try {
    const { data }: AxiosResponse<TodoItem[]> = yield call(
      todosService.getAllTodos
    );

    yield put(getAllTodosSuccess(data));
  } catch (error) {
    yield put(getAllTodosFailure());
  }
}

export function* addTodoRequestSaga(action: Action) {
  try {
    const response: AxiosResponse = yield call(
      todosService.createNewTodo,
      action.payload.todo
    );

    if (response.status === 201) {
      yield put(addTodoSuccess(action.payload.todo));

      return;
    }
  } catch (error) {
    console.log(error);
  }
}

export function* updateTodoRequestSaga(action: Action) {
  try {
    const todos: TodoItem[] = yield select((state) => state.todos.data);

    const { data: todoItem, status }: AxiosResponse = yield call(
      todosService.updateTodoById,
      {
        ...action.payload.todo,
        isCompleted: !action.payload.todo.isCompleted,
      }
    );

    if (status === 200) {
      const newTodos = todos.map((todo) =>
        todo.id === todoItem.id ? todoItem : todo
      );

      yield put(updateTodoSuccess(newTodos));
    }
  } catch (error) {
    yield console.log("no saga", error);
  }
}

export function* deleteTodoRequestSaga(action: Action) {
  try {
    const todos: TodoItem[] = yield select((state) => state.todos.data);

    yield call(todosService.deleteTodoById, action.payload.todoId);

    const filteredTodos = todos.filter(
      (todo) => todo.id !== action.payload.todoId
    );
    yield put(deleteTodoSuccess(filteredTodos));
  } catch (error) {
    yield put(deleteTodoFailure());
  }
}
