import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { TodoItem } from "../../store/ducks/todos/types";
import { v4 as uuidv4 } from "uuid";
import {
  addTodoRequest,
  deleteTodoRequest,
  getAllTodosRequest,
  updateTodoRequest,
} from "../../store/ducks/todos/actions";

const Todos = () => {
  const todos = useSelector<ApplicationState, TodoItem[]>(
    (state) => state.todos.data
  );

  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  const handleClickOnAdd = () => {
    if (todoText === "") return;

    const todoItem: TodoItem = {
      id: uuidv4(),
      title: todoText,
      isCompleted: false,
    };

    dispatch(addTodoRequest(todoItem));

    setTodoText("");
  };

  const handleClickOnUpdateTodo = (todo: TodoItem) => {
    dispatch(updateTodoRequest(todo));
  };

  const handleClickOnDelete = (todoId: string) => {
    dispatch(deleteTodoRequest(todoId));
  };

  useEffect(() => {
    dispatch(getAllTodosRequest());
  }, [dispatch]);

  return (
    <main style={{ width: "400px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          style={{ padding: "8px 16px" }}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          style={{ padding: "8px 16px", marginLeft: "8px" }}
          onClick={handleClickOnAdd}
          type="button"
        >
          Adicionar
        </button>
      </div>
      <ul
        style={{
          listStyle: "none",
          paddingInlineStart: "0px",
        }}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            <li
              style={{
                color: todo.isCompleted ? "gray" : "black",
                textDecoration: todo.isCompleted ? "line-through" : "none",
                padding: "8px 0px",
                cursor: "pointer",
                marginRight: "8px",
                width: "100%",
              }}
              onClick={() => handleClickOnUpdateTodo(todo)}
            >
              {todo.title}
            </li>
            <button onClick={() => handleClickOnDelete(todo.id)}>
              Deletar
            </button>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default Todos;
