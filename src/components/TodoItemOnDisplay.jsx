import Styles from "./todoitem.module.css";

export default function TodoItemOnDisplay({ todo, setTodo, todos, setTodos }) {
  function handleDelete(todo) {
    setTodos(todos.filter((item) => item !== todo)); //filter out the item that match todo
  }
  function handleClick(name) {
    const newArray = todos.map((item) =>
      item.name === name ? { ...item, done: !item.done } : item
    );
    setTodos(newArray);
    console.log(todos);
  }
  const isComplete = todo.done?Styles.complete:"";
  return (
    <div className={Styles.item}>
      <div className={Styles.itemName}>
        <span className={isComplete} onClick={() => handleClick(todo.name)}>{todo.name}</span>
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
