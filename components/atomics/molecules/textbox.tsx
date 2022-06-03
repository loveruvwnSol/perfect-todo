import React, { useState } from "react"
import styles from "../../../styles/Home.module.css"
import { Todo } from "../../../lib/types"
import { nanoid } from "nanoid"

type TextboxProps = {
  addTodo: (todo: Todo) => void
}

export const Textbox: React.FC<TextboxProps> = ({ addTodo }) => {
  const [text, setText] = useState("")

  const onAddButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const todo: Todo = {
      id: nanoid(),
      text: text,
      status: "add",
    }
    addTodo(todo)
    setText("")
  }

  return (
    <div>
      <h1 className={styles.title}>Need Todo</h1>
      <input
        className={styles.textBox}
        type='text'
        placeholder='Add your need'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.addButton} type='submit' onClick={onAddButtonClick}>
        +
      </button>
    </div>
  )
}
