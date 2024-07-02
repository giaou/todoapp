import Styles from "./todoitem.module.css";

export default function TodoItemOnDisplay({ todo, todos, setTodos }) {
  function handleDelete(todo) {
    setTodos(todos.filter((item) => item !== todo)); //filter out the item that match todo
  }
  return (
    <div className={Styles.item}>
      <div className={Styles.itemName}>
        {todo.name}
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={Styles.deleteBtn}
          >
            X
          </button>
        </span>
      </div>
      <hr className={Styles.line}></hr>
    </div>
  );
}
