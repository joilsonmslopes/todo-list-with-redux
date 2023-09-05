import { Reducer } from "redux";
import { TodosState, TodosTypes } from "./types";

const INITIAL_STATE: TodosState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.GET_TODOS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case TodosTypes.GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.todos,
      };
    }
    case TodosTypes.GET_TODOS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case TodosTypes.ADD_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case TodosTypes.ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.todo],
      };
    }
    case TodosTypes.ADD_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case TodosTypes.UPDATE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case TodosTypes.UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.todos,
      };
    }
    case TodosTypes.UPDATE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        data: state.data,
      };
    }
    case TodosTypes.DELETE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case TodosTypes.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: true,
        data: action.payload.todos,
      };
    }
    case TodosTypes.DELETE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
