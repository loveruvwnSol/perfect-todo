import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import { Textbox } from "../molecules/textbox";
import { DeleteButton } from "../organisms/deleteButton";
import { TodoItems } from "../molecules/todoItems";
import { Todo } from "../../../lib/types";

export const Templates = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
    console.log([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = "delete";
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  const deleteAllTodos = () => {
    const newTodos = todos.map((item) => {
      item.status = "delete";
      return item;
    });
    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <div>
        <Textbox addTodo={addTodo} />
        <TodoItems todos={todos} deleteTodo={deleteTodo} />
        <DeleteButton deleteAllTodos={deleteAllTodos} />
      </div>
    </div>
  );
};
