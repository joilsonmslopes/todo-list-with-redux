import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { TodosState } from "./ducks/todos/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  todos: TodosState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
