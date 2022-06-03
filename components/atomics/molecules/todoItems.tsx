import React from "react";
import styles from "../../../styles/Home.module.css";
import { Todo } from "../../../lib/types";
import { FiTrash } from "react-icons/fi";

type TodoItemsProps = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
};

export const TodoItems: React.FC<TodoItemsProps> = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos
        .filter((todo) => todo.status !== "delete")
        .map((todo) => (
          <div key={todo.id} className={styles.todoItem}>
            <div className={styles.todoList}>{todo.text}</div>
            <FiTrash
              className={styles.trashBox}
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        ))}
    </div>
  );
};
