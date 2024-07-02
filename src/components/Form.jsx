import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault(); //prevent the page from loading automatically
    setTodos([...todos, todo]); //save todo to the todolist
    setTodo(""); //clear the text box when click submit
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
