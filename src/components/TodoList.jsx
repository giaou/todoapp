import TodoItemOnDisplay from "./TodoItemOnDisplay";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItemOnDisplay key={item} todo={item} />
      ))}
    </div>
  );
}
