import TodoItemOnDisplay from "./TodoItemOnDisplay";
import Styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={Styles.list}>
      {todos.map((item) => (
        <TodoItemOnDisplay
          key={item.name}
          todo={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
