import { all, takeLatest } from "redux-saga/effects";
import { TodosTypes } from "./todos/types";

import {
  getAllTodosRequest,
  addTodoRequestSaga,
  updateTodoRequestSaga,
  deleteTodoRequestSaga,
} from "./todos/sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(TodosTypes.GET_TODOS_REQUEST, getAllTodosRequest),
    takeLatest(TodosTypes.ADD_TODO_REQUEST, addTodoRequestSaga),
    takeLatest(TodosTypes.UPDATE_TODO_REQUEST, updateTodoRequestSaga),
    takeLatest(TodosTypes.DELETE_TODO_REQUEST, deleteTodoRequestSaga),
  ]);
}
