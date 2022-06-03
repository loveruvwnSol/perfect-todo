import React from "react";
import styles from "../../../styles/Home.module.css";

type DeleteButtonProps = {
  deleteAllTodos: () => void;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  deleteAllTodos,
}) => {
  return (
    <div>
      <button
        className={styles.deleteButton}
        type="reset"
        onClick={() => {
          deleteAllTodos();
        }}
      >
        delete All
      </button>
    </div>
  );
};
