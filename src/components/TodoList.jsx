import TodoItemOnDisplay from "./TodoItemOnDisplay";
import Styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={Styles.list}>
      {sortedTodos.map((item) => (
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
